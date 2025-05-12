import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import {
    DashboardOutlined,
    UserOutlined,
    SettingOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Link, Outlet, useLocation } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const DashboardLayout = () => {
    const location = useLocation();
    const [collapsed, setCollapsed] = useState(false);
    const [selectedKey, setSelectedKey] = useState(location.pathname);

    useEffect(() => {
        setSelectedKey(location.pathname);
    }, [location.pathname]);

    const toggleCollapse = () => setCollapsed(!collapsed);

    const items = [
        {
            key: '/dashboard',
            icon: <DashboardOutlined />,
            label: <Link to="/dashboard">Dashboard</Link>,
        },
        {
            key: '/users',
            icon: <UserOutlined />,
            label: <Link to="/users">Users</Link>,
        },
        {
            key: '/settings',
            icon: <SettingOutlined />,
            label: <Link to="/settings">Settings</Link>,
        },
    ];

    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* 🌙 왼쪽 사이드 메뉴 */}
            <Sider collapsible collapsed={collapsed} trigger={null}>
                <div className="text-white text-center py-4 text-xl font-bold">
                    {collapsed ? '📊' : 'My Dashboard'}
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[selectedKey]}
                    items={items}
                />
            </Sider>

            {/* 🌤️ 오른쪽 영역 */}
            <Layout>
                <Header className="bg-white px-6 flex items-center justify-between shadow">
                    <button onClick={toggleCollapse} className="text-xl">
                        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    </button>
                    <div className="text-gray-500">Welcome, Admin 👋</div>
                </Header>

                <Content className="p-6 bg-gray-50 min-h-[calc(100vh-64px)]">
                    <Outlet /> {/* 라우터에 따라 페이지가 여기에 나타남 */}
                </Content>
            </Layout>
        </Layout>
    );
};

export default DashboardLayout;
