import styled from 'styled-components';
import arrowIcon from '../../../assets/icons/arrow.svg';

const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow:
    0 14px 34px -14px rgba(23, 44, 90, 0.22),
    0 3px 8px -2px rgba(23, 44, 90, 0.08);
  padding: 16px 17px;
  transition:
    transform 0.15s,
    box-shadow 0.15s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px -10px rgba(0, 0, 0, 0.16);
  }
`;

const MainButton = styled.button`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 11px;
  text-align: left;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
`;

const Title = styled.span`
  flex: 1;
  min-width: 0;
  font-size: 15.5px;
  font-weight: 700;
  letter-spacing: -0.2px;
  line-height: 1.35;
  color: #17171b;
`;

const MoreDots = styled.span`
  flex: none;
  font-size: 15px;
  color: #c4c4cc;
  line-height: 1;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const Tag = styled.span`
  font-size: 11.5px;
  font-weight: 700;
  color: ${(props) => props.$theme.color};
  background: ${(props) => props.$theme.bg};
  padding: 4px 8.5px;
  border-radius: 20px;
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const People = styled.div`
  display: flex;
`;

const Avatar = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${(props) => props.$bg};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11.5px;
  font-weight: 700;
  border: 2px solid #fff;
  margin-left: -6px;

  &:first-child {
    margin-left: 0;
  }
`;

const SourceLink = styled.a`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 12px;
  padding-top: 11px;
  border-top: 0.67px solid #f2f2f4;
  font-size: 10px;
  font-weight: 600;
  color: #8a8a93;
  text-decoration: none;

  &:hover {
    color: #6b6b73;
  }
`;

const SourceText = styled.span`
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TAG_THEME = {
  neutral: { bg: '#FDF1E4', color: '#C97A22' },
  warn: { bg: '#FBEAEA', color: '#B03A3A' },
  positive: { bg: '#E8F3EC', color: '#2C7A4B' },
  meta: { bg: '#EEEEFC', color: '#5B5BD6' },
};

const AVATAR_COLORS = {
  M: '#3BA55C',
  김: '#17171B',
  지: '#7B5BD6',
};

export default function TaskCard({ title, tags = [], people = [], source, slackHref, onClick }) {
  return (
    <Card>
      <MainButton onClick={onClick}>
        <TitleRow>
          <Title>{title}</Title>
          <MoreDots>···</MoreDots>
        </TitleRow>

        {tags.length > 0 && (
          <TagRow>
            {tags.map((t) => (
              <Tag key={t.label} $theme={TAG_THEME[t.type] ?? TAG_THEME.neutral}>
                {t.label}
              </Tag>
            ))}
          </TagRow>
        )}

        {people.length > 0 && (
          <BottomRow>
            <People>
              {people.map((p, i) => (
                <Avatar key={i} $bg={AVATAR_COLORS[p] ?? '#E4E4E8'}>
                  {p}
                </Avatar>
              ))}
            </People>
          </BottomRow>
        )}
      </MainButton>

      {source && slackHref && (
        <SourceLink href={slackHref} target="_blank" rel="noreferrer">
          <SourceText>{source}</SourceText>
          <img src={arrowIcon} alt="" width={10} height={10} />
        </SourceLink>
      )}
    </Card>
  );
}
