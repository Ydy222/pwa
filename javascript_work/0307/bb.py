import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt

# 데이터 생성
df = pd.DataFrame({
    "Date": pd.date_range(start="2024-01-01", periods=10),
    "Stock Price": [100, 105, 102, 110, 120, 125, 130, 128, 132, 140]
})

# Streamlit UI
st.title("📈 Stock Price Dashboard")
st.line_chart(df.set_index("Date"))  # 간단한 라인 차트

# Matplotlib 사용 예제
st.subheader("Matplotlib Graph")
fig, ax = plt.subplots()
ax.plot(df["Date"], df["Stock Price"], marker="o", linestyle="-", color="b")
st.pyplot(fig)  # Streamlit에 그래프 출력
