import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Test from './Test.jsx'

// 태그를 사용하게 되면 그안에 있는 함수가 호출되면서
// return 되는 내용이 랜더링 됩니다.
createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Test />
  // </StrictMode>,
)
