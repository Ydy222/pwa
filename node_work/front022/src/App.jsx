import './App.css'
import axios from "axios";
import {useState} from "react";
// import {useEffect} from "react";

const API_URL = import.meta.env.VITE_API_URL;

function App() {

    const [test, setTest] = useState("안녕 test");
    const getRoot = async () => {
        // console.log("get root");
        // const result = await axios.get("http://localhost:8080");
        // console.log(result.data);

        const {data, error} = await axios.get(API_URL);
        console.log(data);
        console.log(error);

        setTest(data);
    }

    const daeguSub = () => {
        if ("serviceWorker" in navigator && "PushManager" in window) {
            console.log("service worker");
            navigator.serviceWorker.ready.then((registration) => {
                console.log("service worker ready");
                registration.pushManager
                    .subscribe({
                        userVisibleOnly: true,
                        // 공개키 설정
                        applicationServerKey: "BCXJoTkXAUR1gTjWBzJCGtIi6qGXrw2LDtbGg5YuhgZdxyrTXHoO3UoX-spWSNcNbLUHmiIn_sxPNaKd5Cd9mxU",
                    })
                    .then((subscription) => {
                        return fetch(`${API_URL}/subscribe`, {
                            method: "POST",
                            body: JSON.stringify({...subscription, city: "daegu"}),
                            headers: {
                                "Content-Type": "application/json",
                            },
                        });
                    })
                    .catch((error) => {
                        console.error("푸시 구독 실패:", error);
                    });
            });

        }
    }

    return (
        <>
            <h1>Hello React</h1>
            <p id='aa'>Hello React + {test}</p>
            <button onClick={daeguSub}>대구구독</button>
            {/*<button onClick={getRoot}>백엔드요청</button>*/}
            <button onClick={
                () => {
                    console.log("get root");
                    getRoot();
                }
            }>백엔드요청
            </button>
        </>
    )
}

export default App
