import React, { useEffect, useState } from "react";
import { Card, Space, Table } from "antd";
import { Line } from "@ant-design/plots";

function AirTable(props) {
  console.log("AirTable props", props);
  const [data, setData] = useState(props);

  // porps 값이 바뀌면.. useEffect 가 실행된다.
  useEffect(() => {
    console.log("AirTable useEffect");
    // setData 로 useState 사용시 화면 재랜더링이 이루어지면서 클릭했는
    // 좌표의 미세먼지 데이터가 표시된다.
    setData(props);
  }, [props]);

  try {
    const {
      aqi,
      city: { geo },
      iaqi: { co, no2, o3, pm10, pm25, so2 },
    } = props;
    console.log(aqi);
    console.log(geo);
    console.log("일산화탄소", co);
    console.log("이산화질소", no2);
    console.log("오존", o3);
    console.log("미세먼지", pm10);
    console.log("초미세먼지", pm25);
    console.log("아황산가스", so2);
  } catch (e) {}

  const dataSource = [
    {
      key: "1",
      aqi: "0~50",
      grade: "좋음",
      mean: "공기가 깨끗",
      remark: "누구나 활동 OK",
    },
    {
      key: "2",
      aqi: "51~100	",
      grade: "보통",
      mean: "민감군은 주의",
      remark: "민감군은 실외 활동 조절",
    },
    {
      key: "3",
      aqi: "101~150",
      grade: "나쁨",
      mean: "민감군은 피로감·호흡 불편 가능",
      remark: "실외 활동 자제 권장",
    },
    {
      key: "4",
      aqi: "151~200",
      grade: "매우 나쁨",
      mean: "누구나 영향 가능",
      remark: "노약자 실외 활동 제한",
    },
    {
      key: "5",
      aqi: "201 이상",
      grade: "위험",
      mean: "건강에 매우 해로움",
      remark: "외출 자제, 실내 대기 권장",
    },
  ];
  const columns = [
    {
      title: "AQI",
      dataIndex: "aqi",
      key: "aqi",
    },
    {
      title: "등급",
      dataIndex: "grade",
      key: "grade",
    },
    {
      title: "의미",
      dataIndex: "mean",
      key: "mean",
    },
    ,
    {
      title: "비고",
      dataIndex: "remark",
      key: "remark",
    },
  ];

  // props 값이 바뀌면.. 컴포넌트가 재랜더링 되지 않는다.

  return (
    <Card hoverable style={{ margin: "2rem" }}>
      <h1>대기질 정보 {data.aqi}</h1>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
      오염물질 단위 좋음 기준 (AQI 0~50 해당)
      <br />
      일산화탄소 (CO) ppm 0~4.4 ppm
      <br />
      이산화질소 (NO₂) ppb 0~53 ppb
      <br />
      오존 (O₃) ppb (8시간 평균) 0~54 ppb
      <br />
      미세먼지 (PM10) μg/m³ 0~54 μg/m³
      <br />
      초미세먼지 (PM2.5) μg/m³ 0~12 μg/m³
      <br />
      아황산가스 (SO₂) ppb 0~35 ppb
      <br />
      <div>
        {/* <h2>일산화탄소 : {JSON.stringify(data)} </h2> */}
        <h2>일산화탄소 : {data?.iaqi?.co?.v} μg/m³</h2>
        <h2>이산화질소 : {data?.iaqi?.no2?.v} μg/m³</h2>
        <h2>오존 : {data?.iaqi?.o3?.v} μg/m³</h2>
        <h2>미세먼지 : {data?.iaqi?.pm10?.v} μg/m³</h2>
        <h2>초미세먼지 : {data?.iaqi?.pm25?.v} μg/m³</h2>
        <h2>아황산가스 : {data?.iaqi?.so2?.v} μg/m³</h2>
      </div>
      <Line
        data={
            data.forecast?.daily?.pm10
            ?.map((item, index) => ({
              date: item.day,
              value: item.avg,
              type: "PM10",
            }))
            .concat(
                data.forecast?.daily?.pm25?.map((item) => ({
                date: item.day,
                value: item.avg,
                type: "PM2.5",
              }))
            ) || []
        }
        xField="date"
        yField="value"
        colorField="type"
        point={{
          shape: "diamond",
        }}
      />
    </Card>
  );
}

export default AirTable;
