import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const BarChartStep2 = () => {
  const svgRef = useRef();

  const data = [
    { day: "월", value: Math.floor(Math.random() * 100) + 10 },
    { day: "화", value: Math.floor(Math.random() * 100) + 10 },
    { day: "수", value: Math.floor(Math.random() * 100) + 10 },
    { day: "목", value: Math.floor(Math.random() * 100) + 10 },
    { day: "금", value: Math.floor(Math.random() * 100) + 10 },
    { day: "토", value: Math.floor(Math.random() * 100) + 10 },
    { day: "일", value: Math.floor(Math.random() * 100) + 10 },
  ];

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = 500;
    const height = 300;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };

    svg.selectAll("*").remove(); // 초기화

    const x = d3.scaleBand()
      .domain(data.map(d => d.day))
      .range([margin.left, width - margin.right])
      .padding(0.2);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const color = d3.scaleOrdinal(d3.schemeTableau10); // 🎨 색상 지정

    // X축
    svg.append("g")
      .attr("transform", `translate(0, ${height - margin.bottom})`)
      .call(d3.axisBottom(x));

    // Y축
    svg.append("g")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(y));

    // 📊 막대 여러 개
    svg.selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", d => x(d.day))
      .attr("y", d => y(d.value))
      .attr("width", x.bandwidth())
      .attr("height", d => height - margin.bottom - y(d.value))
      .attr("fill", (_, i) => color(i));

    // 🧠 숫자 라벨 붙이기
    svg.selectAll("text.label")
      .data(data)
      .join("text")
      .attr("class", "label")
      .attr("x", d => x(d.day) + x.bandwidth() / 2)
      .attr("y", d => y(d.value) - 5)
      .attr("text-anchor", "middle")
      .attr("fill", "black")
      .text(d => d.value);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>📊 D3 막대 차트 (요일별 데이터)</h2>
      <svg ref={svgRef} width={500} height={300} />
    </div>
  );
};

export default BarChartStep2;
