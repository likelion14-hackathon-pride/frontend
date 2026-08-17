import styled from 'styled-components';

import { messageOf } from '../../apis/errors';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  min-height: ${({ $compact }) => ($compact ? '80px' : '160px')};
  padding: 20px;
  text-align: center;
`;

const Spinner = styled.span`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 2.5px solid rgba(23, 23, 27, 0.1);
  border-top-color: #ff6000;
  animation: sai-spin 0.7s linear infinite;

  @keyframes sai-spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Text = styled.p`
  margin: 0;
  font-family: 'Plus Jakarta Sans', Pretendard, sans-serif;
  font-size: 13px;
  line-height: 1.6;
  color: #8a8a93;
`;

const ErrorTitle = styled.p`
  margin: 0;
  font-family: 'Plus Jakarta Sans', Pretendard, sans-serif;
  font-size: 13.5px;
  font-weight: 700;
  color: #b03a3a;
`;

const ErrorCode = styled.code`
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11px;
  color: #b4b4bc;
`;

const RetryButton = styled.button`
  margin-top: 4px;
  padding: 8px 16px;
  border: none;
  border-radius: 999px;
  background: #17171b;
  color: #fff;
  font-family: 'Plus Jakarta Sans', Pretendard, sans-serif;
  font-size: 12.5px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    opacity: 0.88;
  }
`;

export function LoadingState({ label = '불러오는 중…', compact = false }) {
  return (
    <Box $compact={compact} role="status" aria-live="polite">
      <Spinner />
      <Text>{label}</Text>
    </Box>
  );
}

export function ErrorState({ error, onRetry, compact = false, retryLabel = '다시 시도' }) {
  return (
    <Box $compact={compact} role="alert">
      <ErrorTitle>{messageOf(error)}</ErrorTitle>
      {error?.code && <ErrorCode>{error.code}</ErrorCode>}
      {onRetry && (
        <RetryButton type="button" onClick={onRetry}>
          {retryLabel}
        </RetryButton>
      )}
    </Box>
  );
}

export function EmptyState({ label = '아직 아무것도 없습니다', compact = false, children }) {
  return (
    <Box $compact={compact}>
      <Text>{label}</Text>
      {children}
    </Box>
  );
}

// data 가 있으면 로딩 중이어도 옛 데이터를 계속 보여 준다(화면이 깜빡이지 않도록).
export function AsyncSection({
  loading,
  error,
  onRetry,
  data,
  compact = false,
  loadingLabel,
  children,
}) {
  if (loading && data == null) return <LoadingState compact={compact} label={loadingLabel} />;
  if (error && data == null)
    return <ErrorState error={error} onRetry={onRetry} compact={compact} />;
  return children;
}

const Banner = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid ${({ $tone }) => ($tone === 'error' ? '#F6CACD' : '#F5E2AE')};
  background: ${({ $tone }) => ($tone === 'error' ? '#FEF2F3' : '#FFF8E3')};
  color: ${({ $tone }) => ($tone === 'error' ? '#96131C' : '#7A5A05')};
  font-family: 'Plus Jakarta Sans', Pretendard, sans-serif;
  font-size: 12.5px;
  line-height: 1.6;
`;

const BannerAction = styled.button`
  margin-left: auto;
  flex-shrink: 0;
  border: none;
  background: transparent;
  color: inherit;
  font-family: inherit;
  font-size: 12px;
  font-weight: 700;
  text-decoration: underline;
  cursor: pointer;
`;

export function InlineError({ error, onRetry, tone = 'error', retryLabel = '다시 시도' }) {
  if (!error) return null;
  return (
    <Banner $tone={tone} role="alert">
      <span>{messageOf(error)}</span>
      {onRetry && (
        <BannerAction type="button" onClick={onRetry}>
          {retryLabel}
        </BannerAction>
      )}
    </Banner>
  );
}

export default AsyncSection;
