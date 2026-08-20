import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const THUMB_WIDTH = 9;
const THUMB_HEIGHT = 18;

const Wrap = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  flex: 1 1 auto;
  min-height: 0;
`;

const Content = styled.div`
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  height: 100%;
  overflow-y: auto;
  padding-right: 14px;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Track = styled.div`
  position: absolute;
  top: 2px;
  bottom: 2px;
  right: 2px;
  width: 6px;
  border-radius: 999px;
  background: #f0f1f5;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  transition: opacity 0.15s ease;
`;

const Thumb = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: ${THUMB_WIDTH}px;
  height: ${THUMB_HEIGHT}px;
  border-radius: 999px;
  background: ${({ $color }) => $color};
  box-shadow: 0 2px 6px -1px ${({ $color }) => $color}8c;
  cursor: ${({ $dragging }) => ($dragging ? 'grabbing' : 'grab')};

  &:hover {
    filter: brightness(0.88);
  }
`;

// 컨텐츠가 넘칠 때만 오른쪽에 트랙+동그란 원으로 스크롤 위치를 보여주고, 원을 끌면 스크롤도 움직인다.
function ScrollArea({ children, className, accentColor = '#2563eb' }) {
  const contentRef = useRef(null);
  const trackRef = useRef(null);
  const [thumbOffset, setThumbOffset] = useState(0);
  const [scrollable, setScrollable] = useState(false);
  const [dragging, setDragging] = useState(false);

  const measure = useCallback(() => {
    const content = contentRef.current;
    const track = trackRef.current;
    if (!content || !track) return;

    const maxScroll = content.scrollHeight - content.clientHeight;
    const trackTravel = track.clientHeight - THUMB_HEIGHT;
    setScrollable(maxScroll > 1);

    if (maxScroll <= 0 || trackTravel <= 0) {
      setThumbOffset(0);
      return;
    }
    setThumbOffset((content.scrollTop / maxScroll) * trackTravel);
  }, []);

  useEffect(() => {
    measure();
    const content = contentRef.current;
    if (!content) return undefined;

    const observer = new ResizeObserver(measure);
    observer.observe(content);
    window.addEventListener('resize', measure);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [measure, children]);

  const handleThumbPointerDown = (event) => {
    event.preventDefault();
    const content = contentRef.current;
    const track = trackRef.current;
    if (!content || !track) return;

    setDragging(true);
    const startY = event.clientY;
    const startScrollTop = content.scrollTop;
    const maxScroll = content.scrollHeight - content.clientHeight;
    const trackTravel = track.clientHeight - THUMB_HEIGHT;

    const handleMove = (moveEvent) => {
      if (trackTravel <= 0) return;
      const deltaRatio = (moveEvent.clientY - startY) / trackTravel;
      content.scrollTop = startScrollTop + deltaRatio * maxScroll;
    };
    const handleUp = () => {
      setDragging(false);
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerup', handleUp);
    };
    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerup', handleUp);
  };

  // 트랙의 빈 부분을 클릭하면 그 위치로 바로 이동한다.
  const handleTrackClick = (event) => {
    if (event.target !== trackRef.current) return;
    const content = contentRef.current;
    const track = trackRef.current;
    if (!content || !track) return;

    const rect = track.getBoundingClientRect();
    const trackTravel = track.clientHeight - THUMB_HEIGHT;
    if (trackTravel <= 0) return;
    const clickOffset = event.clientY - rect.top - THUMB_HEIGHT / 2;
    const ratio = Math.min(1, Math.max(0, clickOffset / trackTravel));
    content.scrollTop = ratio * (content.scrollHeight - content.clientHeight);
  };

  return (
    <Wrap className={className}>
      <Content ref={contentRef} onScroll={measure}>
        {children}
      </Content>
      <Track ref={trackRef} $visible={scrollable} onClick={handleTrackClick}>
        <Thumb
          style={{ top: `${thumbOffset}px` }}
          onPointerDown={handleThumbPointerDown}
          $dragging={dragging}
          $color={accentColor}
        />
      </Track>
    </Wrap>
  );
}

export default ScrollArea;
