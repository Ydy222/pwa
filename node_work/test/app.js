// server.js
const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 👉 1. VAPID 키 생성 (최초 1회만 하면 됨)
// const vapidKeys = webpush.generateVAPIDKeys();
// console.log(vapidKeys);

const vapidKeys = {
  publicKey: 'BM2_ckesszKU9bWogsZPus9B3YbEONm9MdzUavjsP9xokJW3j9OZc1qkmjyiqbDyKlCLU8UHPIgvRapCmCAhY6Q',
  privateKey: '2nFPUiIiYWoAMXkgitCxnIkRRcMmx8RdFUctzXUWFjU'
};

// 👉 2. VAPID 정보 설정
webpush.setVapidDetails(
  'mailto:your@email.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// 👉 3. 클라이언트에서 받은 subscription 저장용
let clientSubscription = null;

app.post('/save-subscription', (req, res) => {
  clientSubscription = req.body;
  console.log('💾 Subscription 저장됨:', clientSubscription);
  res.status(201).json({ message: 'Subscription saved.' });
});

app.post('/send-notification', async (req, res) => {
  const payload = JSON.stringify({
    title: '푸시 알림 도착!',
    body: '🎉 서버에서 보낸 메시지예요!',
  });

  try {
    await webpush.sendNotification(clientSubscription, payload);
    res.status(200).json({ message: 'Notification sent' });
  } catch (err) {
    console.error('❌ 푸시 전송 실패:', err);
    res.sendStatus(500);
  }
});

const PORT = 4000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 푸시 서버 실행 중: http://112.222.157.156:${PORT}`);
  });
  
