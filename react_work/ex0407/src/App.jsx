import {useState} from 'react'
import './App.css'
import Header from "./layout/Header.jsx";
import {Route, Routes} from "react-router-dom";
import {lazy, Suspense} from "react";


const Home = lazy(() => import("./pages/Home"));
const Lotto = lazy(() => import("./pages/Lotto"));

function App() {

    return (
        <>
            <Suspense fallback={<h1>로딩 중...</h1>}>
                <Header/>
                <div className="card">
                    <Routes>
                        <Route path={"/"} element={<Home/>}></Route>
                        <Route path={"/lotto"} element={<Lotto/>}></Route>
                    </Routes>
                </div>
            </Suspense>
        </>
    )
}

export default App
