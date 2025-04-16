import React, {useState} from 'react';
import {Layout, Menu, Button, Grid, Row, Col, Card} from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    DashboardOutlined,
    SettingOutlined,
    InfoOutlined,
    FundViewOutlined,
} from '@ant-design/icons';
import {Link, Route, Routes} from "react-router-dom";
import RootPage from "./pages/RootPage.jsx";
import TodoPage from "./pages/TodoPage.jsx";
import ReviewPage from "./pages/ReviewPage.jsx";
import UserAddPage from "./pages/user/UserAddPage.jsx";
import UserListPage from "./pages/user/UserListPage.jsx";

const {Header, Sider, Content, Footer} = Layout;
const {useBreakpoint} = Grid;

import { useLocation } from 'react-router-dom';

// 메뉴 항목 구성
const items = [
    {
        key: 'dashboard',
        icon: <DashboardOutlined/>,
        label: <Link to={`/`}>대시보드</Link>,
    },
    {
        key: 'todo',
        icon: <InfoOutlined />,
        label: <Link to={`/todo`}>할일</Link>,
    },
    {
        key: 'review',
        icon: <FundViewOutlined />,
        label: <Link to={`/review`}>리뷰</Link>,
    },
    {
        key: 'users',
        icon: <UserOutlined/>,
        label: '사용자 관리',
        children: [
            {key: '/user/list', label: <Link to={`/user/list`}>사용자목록</Link>},
            {key: '/user/add', label: <Link to={`/user/add`}>사용자추가</Link>},
            {key: 'users-delete', label: '사용자 삭제'},
        ],
    },
    {
        key: 'settings',
        icon: <SettingOutlined/>,
        label: '설정',
    },
];

const AppLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const screens = useBreakpoint();
    const location = useLocation();
    const selectedKey = location.pathname;

    return (
        <Layout style={{minHeight: '100vh'}}>
            {/* Sider (사이드 메뉴) */}
            <Sider
                trigger={null}
                collapsed={collapsed}
                breakpoint="md" // 7680px
                collapsedWidth="0"
                onBreakpoint={(broken) => setCollapsed(broken)}
            >
                <div style={{height: 32, margin: 16, background: 'rgba(255,255,255,0.2)'}}/>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['dashboard']}
                    selectedKeys={[selectedKey]}
                    items={items}
                />
            </Sider>

            <Layout>
                {/* 상단 헤더 */}
                <Header
                    style={{
                        background: '#fff',
                        padding: '0 16px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    {!screens.md && (
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{fontSize: 20}}
                        />
                    )}
                    <div style={{fontSize: '1.1rem', fontWeight: 'bold'}}>
                        로고 또는 상단 헤더
                    </div>
                </Header>

                {/* 본문 콘텐츠 */}
                <Routes>
                    <Route path="/" element={<RootPage/>}></Route>
                    <Route path="/todo" element={<TodoPage/>}></Route>
                    <Route path="/review" element={<ReviewPage/>}></Route>
                    <Route path="/user/add" element={<UserAddPage/>}></Route>
                    <Route path="/user/list" element={<UserListPage/>}></Route>
                </Routes>

                {/* 하단 푸터 */}
                <Footer style={{textAlign: 'center'}}>
                    2025.04.14 made by parkmyounghoi
                </Footer>
            </Layout>
        </Layout>
    );
};

export default AppLayout;
