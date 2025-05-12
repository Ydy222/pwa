import { useEffect, useState } from "react";
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";
import { fetchCities } from "../api/supadb.js";
import { fetchAqi } from "../api/airapi.js";
import AirTable from "./components/AirTable.jsx";
import { Bar, Line, Pie, Column } from "@ant-design/plots";

const DemoDefaultTooltip = () => {
    const data = [
        {
            "name": "London",
            "月份": "Jan.",
            "月均降雨量": 18.9
        },
        {
            "name": "London",
            "月份": "Feb.",
            "月均降雨量": 28.8
        },
        {
            "name": "London",
            "月份": "Mar.",
            "月均降雨量": 39.3
        },
        {
            "name": "London",
            "月份": "Apr.",
            "月均降雨量": 81.4
        },
        {
            "name": "London",
            "月份": "May",
            "月均降雨量": 47
        },
        {
            "name": "London",
            "月份": "Jun.",
            "月均降雨量": 20.3
        },
        {
            "name": "London",
            "月份": "Jul.",
            "月均降雨量": 24
        },
        {
            "name": "London",
            "月份": "Aug.",
            "月均降雨量": 35.6
        },
        {
            "name": "Berlin",
            "月份": "Jan.",
            "月均降雨量": 12.4
        },
        {
            "name": "Berlin",
            "月份": "Feb.",
            "月均降雨量": 23.2
        },
        {
            "name": "Berlin",
            "月份": "Mar.",
            "月均降雨量": 34.5
        },
        {
            "name": "Berlin",
            "月份": "Apr.",
            "月均降雨量": 99.7
        },
        {
            "name": "Berlin",
            "月份": "May",
            "月均降雨量": 52.6
        },
        {
            "name": "Berlin",
            "月份": "Jun.",
            "月均降雨量": 35.5
        },
        {
            "name": "Berlin",
            "月份": "Jul.",
            "月均降雨量": 37.4
        },
        {
            "name": "Berlin",
            "月份": "Aug.",
            "月均降雨量": 42.4
        }
    ];
  const config = {
    data,
    xField: "月份",
    yField: "月均降雨量",
    colorField: "name",
    group: true,
    style: {
      inset: 5,
    },
    onReady: ({ chart }) => {
      try {
        chart.on("afterrender", () => {
          chart.emit("legend:filter", {
            data: { channel: "color", values: ["London"] },
          });
        });
      } catch (e) {
        console.error(e);
      }
    },
  };
  return <Column {...config} />;
};

function App() {
  // supabase 에서 가져온 도시 좌표 데이터 supabase
  const [cities, setCities] = useState([]);
  // 클릭한 좌표의 미세먼지 초미세먼지 데이터
  // {city: {pm10, pm25, o3, no2, so2, co}}
  const [aqiInfo, setAqiInfo] = useState({});

  useKakaoLoader({
    appkey: import.meta.env.VITE_KAKAO_MAP_KEY,
    libraries: ["clusterer", "services", "drawing"],
  });

  // supabase 에서 cities 데이터 가져오기
  useEffect(() => {
    fetchCities().then((data) => {
      setCities(data);
    });
  }, []);

  // 좌표 클릭시 해당 미세먼지 초미세먼지 데이터 가져와서 뿌리기
  const clickAqi = (city) => {
    fetchAqi(city.latitude, city.longitude).then((data) => {
      setAqiInfo(data);
    });
  };

  const config = {
    data: [
      { x: "2023-10-01", y: 50 },
      { x: "2023-10-02", y: 20 },
      { x: "2023-10-03", y: 30 },
      { x: "2023-10-04", y: 40 },
      { x: "2023-10-05", y: 100 },
    ],
    xField: "x",
    yField: "y",
  };

  return (
    <>
      <h1>미세먼지</h1>
      <Map
        center={{ lat: 35.8693, lng: 128.6062 }}
        level={7}
        style={{ width: "100%", height: "50vh" }}
      >
        {cities.map((city) => (
          <MapMarker
            key={city.id}
            position={{ lat: city.latitude, lng: city.longitude }}
            onClick={() => {
              clickAqi(city);
            }}
          ></MapMarker>
        ))}
      </Map>
      {/* { AirTable({...aqiInfo}) } */}
      <AirTable {...aqiInfo}></AirTable>
      {/* <Line {...config} /> */}
      <Line data={config.data} xField={config.xField} yField={config.yField} />
      <Bar data={config.data} xField={config.xField} yField={config.yField} />
      <Pie data={config.data} xField={config.xField} yField={config.yField} colorField={config.yField} angleField={config.yField}/>
      <DemoDefaultTooltip />
    </>
  );
}

export default App;
