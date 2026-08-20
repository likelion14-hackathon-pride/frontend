import styled from 'styled-components';

import { useOnboardingQuestions } from '../../../../hooks/owner/useOnboardingQuestions';
import { ErrorState, InlineError, LoadingState } from '../../../common/AsyncStates';
import QuestionRow from './QuestionRow';
import ChevronIcon from './ChevronIcon';
import { EMPTY_ANSWER, countConfirmed } from './handbookData';

const Card = styled.div`
  box-sizing: border-box;
  border-radius: ${({ $expanded }) => ($expanded ? '22px' : '18px')};
  border: 0.667px solid ${({ $expanded }) => ($expanded ? '#C9DAFB' : '#DCE7FC')};
  background: ${({ $expanded }) => ($expanded ? '#FFFFFF' : '#F7FAFF')};
  box-shadow: ${({ $expanded }) => ($expanded ? '0 14px 34px -14px rgba(37, 99, 235, 0.22)' : 'none')};
  padding: ${({ $expanded }) => ($expanded ? '18.667px' : '0')};
  transition:
    background 0.15s ease,
    border-color 0.15s ease,
    box-shadow 0.15s ease;
`;

const Header = styled.button`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: ${({ $expanded }) => ($expanded ? 'auto' : '49.333px')};
  padding: ${({ $expanded }) => ($expanded ? '0' : '0 18px')};
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
`;

const Number = styled.span`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  padding: 3.667px 7px 3.333px 7px;
  flex-shrink: 0;
  border-radius: 50px;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 10px;
  font-weight: 700;
  border: ${({ $expanded }) => ($expanded ? 'none' : '0.667px solid #C9DAFB')};
  background: ${({ $expanded }) => ($expanded ? '#2563EB' : '#EAF1FE')};
  color: ${({ $expanded }) => ($expanded ? '#FFFFFF' : '#1D4ED8')};
`;

const Name = styled.span`
  flex-shrink: 0;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  font-weight: 700;
  line-height: 128%;
  color: #17171b;
  white-space: nowrap;
`;

const Summary = styled.span`
  /* 펼쳤을 땐 DividerLine 이 오른쪽으로 밀어주지만, 접혔을 땐 그게 없어서
     이 텍스트가 직접 남는 공간을 채워야 화살표가 오른쪽 끝에 붙는다. */
  flex: ${({ $expanded }) => ($expanded ? '0 0 auto' : '1 1 auto')};
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 11px;
  font-weight: 400;
  line-height: 127%;
  color: #b4b4bc;
`;

const DividerLine = styled.span`
  flex: 1 1 auto;
  height: 1px;
  background: #e6e6eb;
  min-width: 16px;
`;

const Fraction = styled.span`
  flex-shrink: 0;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11px;
  font-weight: 700;
  color: #a0a0a8;
  white-space: nowrap;
`;

const Chevron = styled(ChevronIcon)`
  flex-shrink: 0;
  color: #b4b4bc;
  transform: rotate(${({ $expanded }) => ($expanded ? '180deg' : '0deg')});
  transition: transform 0.15s ease;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 14px;
`;

const SkipRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SkipButton = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7.667px 18px 6.667px 18px;
  border: none;
  border-radius: 999px;
  background: #f0f0f2;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 11.5px;
  font-weight: 700;
  color: #6b6b73;
  cursor: pointer;
`;

function ProjectKnowledgeItem({ companyId, project, index, expanded, onToggleExpand }) {
  // 프로젝트 질문 8개도 서버가 준다. 펼쳤을 때만 받아 온다.
  const questions = useOnboardingQuestions(expanded ? companyId : null, project.id);

  const confirmedCount = countConfirmed(questions.questions, questions.answers);
  const total = questions.questions.length;
  const summary = confirmedCount === 0 ? '회사 규칙만 적용' : '프로젝트에서만 다른 규칙';

  return (
    <Card $expanded={expanded}>
      <Header type="button" $expanded={expanded} onClick={onToggleExpand}>
        <Number $expanded={expanded}>{index + 1}</Number>
        <Name>{project.name}</Name>
        <Summary $expanded={expanded}>{summary}</Summary>
        {expanded && total > 0 && (
          <>
            <DividerLine />
            <Fraction>
              {confirmedCount}/{total}
            </Fraction>
          </>
        )}
        <Chevron $expanded={expanded} />
      </Header>

      {expanded && (
        <Body>
          <InlineError error={questions.saveError} />

          {questions.loading && total === 0 && (
            <LoadingState compact label="프로젝트 질문을 불러오는 중…" />
          )}
          {questions.error && total === 0 && (
            <ErrorState error={questions.error} onRetry={questions.reload} compact />
          )}

          {total > 0 && (
            <>
              <SkipRow>
                <SkipButton type="button" onClick={questions.skipAll}>
                  회사 규칙만 쓰고 넘기기
                </SkipButton>
              </SkipRow>
              {questions.questions.map((question) => (
                <QuestionRow
                  key={question.id}
                  question={question}
                  answer={questions.answers[question.id] ?? EMPTY_ANSWER}
                  saving={questions.savingKey === question.id}
                  onChange={(patch) => questions.setAnswer(question.id, patch)}
                />
              ))}
            </>
          )}
        </Body>
      )}
    </Card>
  );
}

export default ProjectKnowledgeItem;
