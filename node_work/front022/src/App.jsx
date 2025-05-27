import './App.css'
import axios from "axios";
import {useEffect, useState} from "react";
// import {useEffect} from "react";

const API_URL = import.meta.env.VITE_API_URL;

function App() {

    const [test, setTest] = useState("안녕 test");
    const getRoot = async ()=> {
        // console.log("get root");
        // const result = await axios.get("http://localhost:8080");
        // console.log(result.data);

        const {data, error} = await axios.get(API_URL);
        console.log(data);
        console.log(error);

        setTest(data);
    }

    useEffect(() => {
        // 푸시 알람 받을 준비 됐어 할꺼야
        if ("serviceWorker" in navigator && "PushManager" in window) {
            console.log("service worker");
            navigator.serviceWorker.ready.then((registration) => {
                console.log("service worker ready");
                registration.pushManager
                    .subscribe({
                        userVisibleOnly: true,
                        // 공개키 설정
                        applicationServerKey: "BOAuoBgOZfgd3ZRCdmzUbA6SX7LlHOkYjnisDXrYMXDCrW6qGAQMLxEVUu4m4UZZjQL4lOX02lU4Qn84gi632uU",
                    })
                    .then((subscription) => {
                        return fetch(`${API_URL}/subscribe`, {
                            method: "POST",
                            body: JSON.stringify(subscription),
                            headers: {
                                "Content-Type": "application/json",
                            },
                        }).then(res=>{
                            console.log(res);
                            console.log('푸시 구독 성공');
                        }).catch(err=>{
                            console.log(err);
                            console.error("푸시 구독 서버 전송 실패:", err);
                        });
                    })
                    .catch((error) => {
                        console.error("푸시 구독 실패:", error);
                    });
            });

        }
    }, []);


  return (
    <>
        <h1>Hello React</h1>
        <p id='aa'>Hello React + {test}</p>
    {/*<button onClick={getRoot}>백엔드요청</button>*/}
    <button onClick={
        ()=>{
            console.log("get root");
        getRoot();
        }
    }    >백엔드요청</button>
    </>
  )
}

export default App
