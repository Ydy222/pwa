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
