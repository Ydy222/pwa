import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import {unstableSetRender} from "antd";
import {registerSW} from "virtual:pwa-register";

// vite 자동으로 serviceWorker 만들어줍니다.
registerSW();

// antdesgin message notification modal 사용가능하게 하는 로직
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
    //<StrictMode>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    //</StrictMode>,
)
