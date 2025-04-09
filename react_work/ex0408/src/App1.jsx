import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// 코드 스플리팅 적용
const Home = lazy(() => import("./pages/Home"));
const Lotto = lazy(() => import("./pages/Lotto"));

function App() {
  return (
    <Suspense fallback={<h1>로딩 중...</h1>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lotto" element={<Lotto />} />
      </Routes>
    </Suspense>
  );
}

export default App;
