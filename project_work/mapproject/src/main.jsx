import '@ant-design/v5-patch-for-react-19';
import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'

import { unstableSetRender } from 'antd';
import { createRoot } from 'react-dom/client';

// ant design 엔서 리액트 19버전이랑 안 맞아서 추가 해야 되는 부분
// message.success
// notification
// modal
unstableSetRender((node, container) => {
    container._reactRoot ||= createRoot(container);
    const root = container._reactRoot;
    root.render(node);
    return async () => {
        await new Promise((resolve) => setTimeout(resolve, 0));
        root.unmount();
    };
});

createRoot(document.getElementById('root')).render(
    // <StrictMode>
    <App />
    // </StrictMode>,
)
