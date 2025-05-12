import {useRef, useState} from 'react'
import './App.css'
import {MapMarker, Map, useKakaoLoader} from "react-kakao-maps-sdk";

const API_KEY = "e2e2a254b45f875ca65de396caabf107";

function App() {
    const [count, setCount] = useState(0);
    useKakaoLoader({
        appkey: API_KEY,
        libraries: ["clusterer", "drawing", "services"],
    })

    return (
        <>
            <h1>Hello</h1>
            <Map
                center={{lat: 33.5563, lng: 126.79581}}
                style={{width: "100%", height: "360px"}}
            >
                <MapMarker position={{lat: 33.55635, lng: 126.795841}}>
                    <div style={{color: "#000"}}>Hello World!</div>
                </MapMarker>
            </Map>
        </>
    )
}

export default App
