import './App.css'
import axios from "axios";
import {useState} from "react";
// import {useEffect} from "react";

function App() {

    const [test, setTest] = useState("안녕 test");
    const getRoot = async ()=> {
        // console.log("get root");
        const result = await axios.get("http://localhost:8080");
        console.log(result.data);

        const {data, error} = await axios.get("http://localhost:8080");
        console.log(data);
        console.log(error);

        setTest(data);
    }

    // useEffect(()=>{
    //     document.getElementById('aa').innerHTML = test;
    // },[]);

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
                        applicationServerKey: "BMCne_9uf301kxUf_wqVTiARfQ0t9tnbTzw7WDLu-eeJ0QGxM_AxkXbEAWxaqSLkNa7ty-XZKjYX5EHLw63N7Y4",
                    })
                    .then((subscription) => {
                        return fetch(`${API_URL}/subscribe`, {
                            method: "POST",
                            body: JSON.stringify(subscription),
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
