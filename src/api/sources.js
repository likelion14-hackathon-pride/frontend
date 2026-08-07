// 지금은 백엔드가 없어서 목업으로 상태 전이만 흉내
// 나중에 API 준비되면 USE_MOCK을 false로 바꾸고 axiosInstance 호출부 채우기

import axiosInstance from "./axiosInstance";

const USE_MOCK = true;

const mockConnect = (kind) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        sourceId: `mock-${kind}-${Date.now()}`,
        status: "done",
      });
    }, 1200); // 실제 연결하는 느낌 위해 약간의 지연 흉내냄
  });

// POST /sources/:kind/connect
export const connectSource = async (kind) => {
  if (USE_MOCK) return mockConnect(kind);

  const { data } = await axiosInstance.post(`/sources/${kind}/connect`);
  return data; // { sourceId, status: idle|busy|done, oauthUrl? }
};

// 스펙엔 별도 엔드포인트가 없고, 클라이언트에서 idle로 되돌리는 것으로 정의됨
export const disconnectSource = async (sourceId) => {
  if (USE_MOCK) return Promise.resolve({ sourceId, status: "idle" });

  // 실제 해제 API가 생기면 여기에 연결
  return Promise.resolve({ sourceId, status: "idle" });
};
