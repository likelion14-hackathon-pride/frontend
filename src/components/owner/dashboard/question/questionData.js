// 서버 상태(qna/models.py:Escalation.Status)와 화면 상태의 대응:
//   DRAFT     팀원이 초안만 만든 상태          → 답변 대기
//   SENT      슬랙으로 보냈고 답을 기다리는 중  → 답변 대기
//   ANSWERED  대표 답장을 회수해 판정까지 끝남  → 승인 대기
//   APPROVED  핸드북 규칙으로 승격됨            → 저장됨
//   DISMISSED 대표가 물린 질문                  → 저장 안 함

import { ESCALATION_STATUS } from '../../../../apis/constants';
import { formatRelativeKo, formatShortKo } from '../../../../utils/time';

export const UI_STATUS = {
  WAITING: 'waiting',
  PENDING_APPROVAL: 'pending_approval',
  SAVED: 'saved',
  DISCARDED: 'discarded',
};

const STATUS_MAP = {
  [ESCALATION_STATUS.DRAFT]: UI_STATUS.WAITING,
  [ESCALATION_STATUS.SENT]: UI_STATUS.WAITING,
  [ESCALATION_STATUS.ANSWERED]: UI_STATUS.PENDING_APPROVAL,
  [ESCALATION_STATUS.APPROVED]: UI_STATUS.SAVED,
  [ESCALATION_STATUS.DISMISSED]: UI_STATUS.DISCARDED,
  DEFAULT: UI_STATUS.WAITING,
};

export function uiStatusOf(status) {
  return STATUS_MAP[status] ?? STATUS_MAP.DEFAULT;
}

export function toQuestionRow(escalation) {
  return {
    id: escalation.id,
    employee: escalation.askedByName || '팀원',
    // 화면에 띄우는 질문 문구. 보낸 원문이 있으면 그것이 대표가 실제로 본 문장이다.
    text: escalation.sentText || escalation.draftKo || escalation.questionEn || '(질문 없음)',
    questionEn: escalation.questionEn,
    draftKo: escalation.draftKo,
    project: escalation.scopeName || '공통 규칙',
    time: formatShortKo(escalation.createdAt),
    relativeTime: formatRelativeKo(escalation.sentAt || escalation.createdAt),
    createdAt: escalation.createdAt ?? '',
    status: uiStatusOf(escalation.status),
    serverStatus: escalation.status,
    // 판정이 '답이 아니다' 로 났을 때. 회피성 답변이라 상태가 그대로 남는다.
    declined: escalation.answerIsAnswer === false,
    answerReason: escalation.answerReason,
    ownerReply: escalation.answerKo || escalation.answerEn || null,
    sentAt: escalation.sentAt,
    answeredAt: escalation.answeredAt,
    proposedEntryId: escalation.proposedEntryId,
  };
}
