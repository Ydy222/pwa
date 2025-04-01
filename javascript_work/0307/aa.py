import dash
import dash_core_components as dcc
import dash_html_components as html
import plotly.express as px
import pandas as pd

# 샘플 데이터
df = pd.DataFrame({
    "Date": pd.date_range(start="2024-01-01", periods=10),
    "Stock Price": [100, 105, 102, 110, 120, 125, 130, 128, 132, 140]
})

# Dash 앱 생성
app = dash.Dash(__name__)

app.layout = html.Div([
    html.H1("Stock Price Trend"),
    dcc.Graph(
        id="stock-chart",
        figure=px.line(df, x="Date", y="Stock Price", title="Stock Prices Over Time")
    )
])

if __name__ == "__main__":
    app.run_server(debug=True)
