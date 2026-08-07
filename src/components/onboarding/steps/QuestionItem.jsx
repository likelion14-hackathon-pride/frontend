import { useState } from "react";

const QuestionItem = ({ question, isOpen, onToggle, onSave, lang }) => {
  const [answer, setAnswer] = useState("");

  return (
    <div className="bg-white rounded-card border border-[#EFEFF1]">
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={onToggle}
        className="w-full flex items-center gap-3 px-4 py-3.5 text-left"
      >
        <span className="flex-1 text-[13px] font-bold">
          {question.question}
        </span>
        <span
          className="text-[10px] font-bold px-2.5 py-1 rounded-full flex-none"
          style={
            question.done
              ? { backgroundColor: "#DCE9E1", color: "#2E7D5B" }
              : { backgroundColor: "#FBF0E4", color: "#B0762B" }
          }
        >
          {question.done
            ? lang === "ko"
              ? "핸드북 항목"
              : "Saved"
            : lang === "ko"
              ? "AI 질문"
              : "AI question"}
        </span>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 border-t border-[#EFEFF1] pt-3.5">
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            rows={3}
            placeholder={
              lang === "ko" ? "답변을 입력하세요" : "Type your answer"
            }
            className="w-full border border-border rounded-input px-3 py-2 text-sm bg-field outline-none focus:border-accent"
          />
          <button
            type="button"
            disabled={!answer.trim()}
            onClick={() => onSave(answer.trim())}
            className="mt-2.5 bg-accent text-white rounded-cta px-3.5 py-2 text-[12px] font-bold disabled:opacity-40"
          >
            {lang === "ko" ? "저장" : "Save"}
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionItem;
