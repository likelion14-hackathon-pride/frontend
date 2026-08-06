import { useState } from "react";
import { connectSource, disconnectSource } from "../../../api/sources";

const SOURCE_KINDS = [
  { kind: "github", labelKo: "GitHub", labelEn: "GitHub" },
  { kind: "slack", labelKo: "Slack", labelEn: "Slack" },
  { kind: "file", labelKo: "로컬 파일", labelEn: "Local file" },
];

const STATUS_STYLE = {
  idle: { pillBg: "#F2F2F4", pillText: "#A0A0A8", border: "#EFEFF1" },
  busy: { pillBg: "#FFF1E1", pillText: "#C97A22", border: "#EFEFF1" },
  done: { pillBg: "#E8F3EC", pillText: "#2E7D5B", border: "#17171B" },
};

const STATUS_LABEL = {
  idle: { ko: "미연결", en: "Not connected" },
  busy: { ko: "연결하는 중", en: "Connecting" },
  done: { ko: "연결됨", en: "Connected" },
};

const StepSources = ({ headingRef, onNext, lang }) => {
  const [sources, setSources] = useState({
    github: { status: "idle", sourceId: null },
    slack: { status: "idle", sourceId: null },
    file: { status: "idle", sourceId: null },
  });

  const handleConnect = async (kind) => {
    setSources((prev) => ({
      ...prev,
      [kind]: { ...prev[kind], status: "busy" },
    }));
    try {
      const result = await connectSource(kind);
      setSources((prev) => ({
        ...prev,
        [kind]: { status: result.status, sourceId: result.sourceId },
      }));
    } catch (err) {
      // 401 OAUTH_DENIED 등 실패 시 스펙대로 idle로 되돌림
      setSources((prev) => ({
        ...prev,
        [kind]: { status: "idle", sourceId: null },
      }));
    }
  };

  const handleDisconnect = async (kind) => {
    const current = sources[kind];
    await disconnectSource(current.sourceId);
    setSources((prev) => ({
      ...prev,
      [kind]: { status: "idle", sourceId: null },
    }));
  };

  const hasConnectedSource = Object.values(sources).some(
    (s) => s.status === "done",
  );

  const handleExtract = () => {
    // TODO: POST /handbook/extract 연동, 지금은 다음 단계로만 이동
    onNext();
  };

  return (
    <div className="max-w-[1080px] mx-auto px-4 md:px-0 py-10">
      <h2
        ref={headingRef}
        tabIndex={-1}
        className="text-[18px] font-extrabold outline-none"
      >
        {lang === "ko" ? "소스 연결" : "Connect sources"}
      </h2>
      <p className="text-[12.5px] text-muted mt-2 mb-6">
        {lang === "ko"
          ? "1개 이상 연결하면 핸드북 초안을 추출할 수 있어요."
          : "Connect at least one source to extract a handbook draft."}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {SOURCE_KINDS.map(({ kind, labelKo, labelEn }) => {
          const { status } = sources[kind];
          const style = STATUS_STYLE[status];

          return (
            <div
              key={kind}
              className="bg-white rounded-card p-4 border"
              style={{ borderColor: style.border }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[13.5px] font-bold">
                  {lang === "ko" ? labelKo : labelEn}
                </span>
                <span
                  className="text-[10.5px] font-bold px-2.5 py-1 rounded-full"
                  style={{
                    backgroundColor: style.pillBg,
                    color: style.pillText,
                  }}
                >
                  {STATUS_LABEL[status][lang]}
                </span>
              </div>

              {status === "done" ? (
                <button
                  type="button"
                  onClick={() => handleDisconnect(kind)}
                  className="w-full text-center py-2.5 rounded-input bg-[#F2F2F4] text-[#6B6B73] text-xs font-bold hover:bg-[#EAEAED] transition"
                >
                  {lang === "ko" ? "연결 해제" : "Disconnect"}
                </button>
              ) : (
                <button
                  type="button"
                  disabled={status === "busy"}
                  onClick={() => handleConnect(kind)}
                  className="w-full text-center py-2.5 rounded-input bg-ink text-white text-xs font-bold disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  {status === "busy"
                    ? lang === "ko"
                      ? "연결하는 중…"
                      : "Connecting…"
                    : lang === "ko"
                      ? "연결하기"
                      : "Connect"}
                </button>
              )}
            </div>
          );
        })}
      </div>

      <button
        type="button"
        disabled={!hasConnectedSource}
        onClick={handleExtract}
        className="mt-6 bg-accent text-white rounded-cta px-4 py-2.5 text-[13px] font-bold disabled:opacity-40 disabled:cursor-not-allowed transition"
      >
        {lang === "ko" ? "추출 시작" : "Start extraction"}
      </button>
    </div>
  );
};

export default StepSources;
