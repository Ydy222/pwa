import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { registerSW } from 'virtual:pwa-register';


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)

// 예: main.tsx 또는 App.vue에서 실행

const updateSW = registerSW();

if ('serviceWorker' in navigator && 'PushManager' in window) {
  navigator.serviceWorker.ready.then(async (reg) => {
    const subscription = await reg.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: 'BM2_ckesszKU9bWogsZPus9B3YbEONm9MdzUavjsP9xokJW3j9OZc1qkmjyiqbDyKlCLU8UHPIgvRapCmCAhY6Q', // base64 → Uint8Array
    });

    await fetch('http://112.222.157.156:4000/save-subscription', {
      method: 'POST',
      body: JSON.stringify(subscription),
      headers: { 'Content-Type': 'application/json' },
    });

    console.log('🔔 Subscription 서버에 전송 완료');
  });
}
