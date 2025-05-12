import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
    NodeExpandOutlined,
} from '@ant-design/icons';
import { Link, useLocation, Routes, Route } from 'react-router-dom';
import PageOne from './pages/PageOne';
import PageTest from './pages/PageTest';
import PageTwoOne from './pages/PageTwo/PageTwoOne';
import PageTwoTwo from './pages/PageTwo/PageTwoTwo';

const { Sider, Content } = Layout;

// ✅ 메뉴 항목 구성 (SubMenu 포함)
const items = [
    {
        key: '/one',
        icon: <MailOutlined />,
        label: <Link to="/one">Page One</Link>,
    },
    {
        key: 'pageTwo',
        icon: <AppstoreOutlined />,
        label: 'Page Two',
        children: [
            {
                key: '/two/one',
                label: <Link to="/two/one">PageTwo-One</Link>,
            },
            {
                key: '/two/two',
                label: <Link to="/two/two">PageTwo-Two</Link>,
            },
        ],
    },
    {
        key: '/test',
        icon: <SettingOutlined />,
        label: <Link to="/test">Test Page</Link>,
    },
];

const LayoutWithSidebar = () => {
    const location = useLocation();
    const [selectedKey, setSelectedKey] = useState(location.pathname);
    const [openKeys, setOpenKeys] = useState([]);

    // ✅ 현재 경로에 따라 메뉴 자동 선택/열림
    useEffect(() => {
        setSelectedKey(location.pathname);

        if (location.pathname.startsWith('/two')) {
            setOpenKeys(['pageTwo']);
        } else {
            setOpenKeys([]);
        }
    }, [location.pathname]);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider theme="dark">
                <div className="text-white text-center text-xl py-4 font-bold">My App</div>
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[selectedKey]}
                    openKeys={openKeys}
                    onOpenChange={setOpenKeys}
                    items={items}
                />
            </Sider>

            <Layout>
                <Content className="p-6 bg-gray-50">
                    <Routes>
                        <Route path="/one" element={<PageOne />} />
                        <Route path="/test" element={<PageTest />} />
                        <Route path="/two/one" element={<PageTwoOne />} />
                        <Route path="/two/two" element={<PageTwoTwo />} />
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    );
};

export default LayoutWithSidebar;
