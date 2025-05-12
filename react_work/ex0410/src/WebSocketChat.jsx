import React, { useEffect } from 'react';

function WebSocketChat() {
    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8005');

        socket.onopen = () => {
            console.log('✅ 서버와 웹소켓 연결 성공!');
        };

        socket.onmessage = (event) => {
            console.log('📨 받은 메시지:', event.data);
            socket.send('💬 클라이언트에서 서버로 답장을 보냅니다');
        };

        socket.onerror = (err) => {
            console.error('❌ 웹소켓 에러:', err);
        };

        socket.onclose = () => {
            console.log('🔌 웹소켓 연결 종료');
        };

        // cleanup: 컴포넌트 언마운트 시 연결 종료
        return () => {
            socket.close();
        };
    }, []);

    return (
        <div className="p-4 text-lg">
            F12를 눌러 <strong>console</strong>과 <strong>network</strong> 탭을 확인하세요.
        </div>
    );
}

export default WebSocketChat;
