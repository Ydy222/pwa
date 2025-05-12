import React, { useState } from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import {
    HomeOutlined,
    InfoCircleOutlined,
    PhoneOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import 'antd/dist/reset.css'; // or antd.min.css depending on version
import WebSocketChat from './WebSocketChat';

const { Header, Sider, Content, Footer } = Layout;

const App = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* 🔹 왼쪽 사이드바 */}
            <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
                <div className="text-white text-center py-4 text-lg font-bold">
                    {collapsed ? '🧭' : 'MySite'}
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        { key: '1', icon: <HomeOutlined />, label: 'Home' },
                        { key: '2', icon: <InfoCircleOutlined />, label: 'About' },
                        { key: '3', icon: <PhoneOutlined />, label: 'Contact' },
                    ]}
                />
            </Sider>

            {/* 🔸 오른쪽 영역 전체 */}
            <Layout>
                {/* 상단 헤더 */}
                <Header style={{ background: '#1677ff', padding: '0 24px' }}>
                    <div style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', lineHeight: '64px' }}>
                        Welcome to MySite
                    </div>
                </Header>

                {/* 콘텐츠 */}
                <Content style={{ padding: '24px' }}>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12} md={8} lg={6}>
                            <div style={{ background: '#eee', padding: '20px' }}>Box 1</div>
                            <div className="min-h-screen flex items-center justify-center">
                                <WebSocketChat />
                            </div>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6}>
                            <div style={{ background: '#ddd', padding: '20px' }}>Box 2</div>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6}>
                            <div style={{ background: '#ccc', padding: '20px' }}>Box 3</div>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6}>
                            <div style={{ background: '#bbb', padding: '20px' }}>Box 4</div>
                        </Col>
                    </Row>
                </Content>

                {/* 하단 푸터 */}
                <Footer style={{ textAlign: 'center' }}>
                    ©2025 Created by You
                </Footer>
            </Layout>
        </Layout>
    );
};

export default App;
