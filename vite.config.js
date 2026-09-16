import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // 배포된 백엔드(saisai.n-e.kr)는 localhost 오리진을 CORS 허용 목록에 두지 않는다.
    // 로컬 개발 중엔 여기서 프록시해 브라우저 입장에서 같은 오리진으로 보이게 한다.
    // 이 프록시를 쓰려면 .env.development.local 에 VITE_API_URL= (빈 값) 로 둬야 한다.
    proxy: {
      '/api': {
        target: 'https://saisai.n-e.kr',
        changeOrigin: true,
        secure: true,
      },
      '/health': {
        target: 'https://saisai.n-e.kr',
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
