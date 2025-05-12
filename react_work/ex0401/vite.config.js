import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// eslint 문법검사
// prettierrc 소스 정리
// vite 환경설정

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 현재 port 5173으로 실행 되는데 3000으로 port 바꿈
  server: {
    port: 3000,
  },
  // 경로 참조 할때 @사용하게 되면 src밑에 있는것 참조 하는 설정
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
