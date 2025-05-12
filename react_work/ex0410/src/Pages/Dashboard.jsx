import React from 'react';
import { Card, Col, Row } from 'antd';
import {
    UserOutlined,
    LineChartOutlined,
    RiseOutlined,
} from '@ant-design/icons';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
} from 'recharts';

const stats = [
    {
        title: '총 사용자 수',
        icon: <UserOutlined />,
        value: '1,245명',
        color: 'bg-blue-100 text-blue-600',
    },
    {
        title: '오늘 방문자 수',
        icon: <RiseOutlined />,
        value: '328명',
        color: 'bg-green-100 text-green-600',
    },
    {
        title: '신규 가입자',
        icon: <LineChartOutlined />,
        value: '54명',
        color: 'bg-yellow-100 text-yellow-600',
    },
];

// 📊 샘플 차트 데이터
const chartData = [
    { name: '월', users: 400 },
    { name: '화', users: 300 },
    { name: '수', users: 500 },
    { name: '목', users: 278 },
    { name: '금', users: 189 },
    { name: '토', users: 239 },
    { name: '일', users: 349 },
];

const Dashboard = () => {
    return (
        <div className="space-y-6">
            {/* 📌 통계 카드 */}
            <Row gutter={16}>
                {stats.map((item, index) => (
                    <Col span={8} key={index}>
                        <Card bordered={false}>
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-gray-500 text-sm">{item.title}</div>
                                    <div className="text-2xl font-bold">{item.value}</div>
                                </div>
                                <div className={`text-2xl p-3 rounded-full ${item.color}`}>
                                    {item.icon}
                                </div>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* 📊 차트 영역 */}
            <div className="bg-white p-6 rounded-xl shadow">
                <h2 className="text-xl font-bold mb-4">주간 방문자 수</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={chartData}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="users" fill="#4096ff" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
                <h2 className="text-xl font-bold mb-4">트렌드 분석 (선 그래프)</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={chartData}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                        <Line type="monotone" dataKey="users" stroke="#1890ff" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Dashboard;
