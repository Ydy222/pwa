import {useState} from 'react'
import './App.css'
import Header from "./layout/Header.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Lotto from "./pages/Lotto.jsx";

function App() {

    return (
        <>
            <Header/>
            <div className="card">
                <Routes>
                    <Route path={"/"} element={<Home/>}></Route>
                    <Route path={"/lotto"} element={<Lotto/>}></Route>
                </Routes>

            </div>
        </>
    )
}

export default App
