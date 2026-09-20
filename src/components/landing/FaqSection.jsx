import { useState } from 'react';
import styled from 'styled-components';
import SectionShell from './SectionShell';
import { FAQS } from './landingData';
import { Reveal } from './reveal';
import { colors } from './theme';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
  align-items: flex-start;
  gap: clamp(32px, 4vw, 56px);
`;

const Heading = styled(Reveal)`
  font-size: 45px;
  font-weight: 700;
  line-height: 1.18;
  letter-spacing: -0.04em;
  text-shadow: 0 6px 24px rgba(23, 23, 27, 0.18);
`;

const List = styled(Reveal)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Item = styled.div`
  overflow: hidden;
  border-radius: 14px;
  border: 1px solid ${colors.line};
  background: #fff;
`;

const Question = styled.button`
  display: flex;
  width: 100%;
  cursor: pointer;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  border: none;
  background: none;
  padding: 19px 22px;
  text-align: left;
`;

const QuestionText = styled.span`
  font-size: 15.5px;
  font-weight: 600;
  letter-spacing: -0.01em;
`;

const Toggle = styled.span`
  flex-shrink: 0;
  font-size: 19px;
  line-height: 1;
  color: ${colors.brand};
`;

const Answer = styled.div`
  overflow: hidden;
  transition:
    max-height 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  max-height: ${({ $open }) => ($open ? '600px' : '0')};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
`;

const AnswerText = styled.div`
  max-width: 560px;
  padding: 0 22px 21px;
  font-size: 14.5px;
  line-height: 1.75;
  color: ${colors.body};
`;

export default function FaqSection({ reveal }) {
  const [open, setOpen] = useState(-1);

  return (
    <SectionShell id="faq">
      <Grid>
        <Heading ref={reveal}>자주 받는 질문</Heading>
        <List ref={reveal}>
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Item key={faq.q}>
                <Question
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <QuestionText>{faq.q}</QuestionText>
                  <Toggle>{isOpen ? '−' : '+'}</Toggle>
                </Question>
                <Answer $open={isOpen}>
                  <AnswerText>{faq.a}</AnswerText>
                </Answer>
              </Item>
            );
          })}
        </List>
      </Grid>
    </SectionShell>
  );
}
