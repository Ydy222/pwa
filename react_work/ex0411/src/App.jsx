import { Col, Image, Layout, Menu, Row } from "antd";
import "./App.css";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { MailOutlined, ManOutlined, WomanOutlined } from "@ant-design/icons";
import { useState } from "react";

function App() {
  const [currentMenu, setCurrentMenu] = useState("menu1");
  const items = [
    { label: "MENU-1", icon: <MailOutlined />, key: "menu1" },
    { label: "직원관리", icon: <ManOutlined />, key: "menu2" },
    { label: "할일관리", icon: <WomanOutlined />, key: "menu3" },
    {
      label: "예약관리",
      icon: <WomanOutlined />,
      children: [
        {
          type: "group",
          label: "item1",
          children: [
            { label: "예약등록", key: "menu4" },
            { label: "예약삭제", key: "menu5" },
          ],
        },
        {
          type: "group",
          label: "item2",
          children: [
            { label: "예약리스트", key: "menu6" },
            { label: "예약수정", key: "menu7" },
          ],
        },
      ],
    },
  ];

  const handleMenu = (e) => {
    setCurrentMenu(e.key);
  };

  return (
    // w-full width:100% h-screen min-height:100vh
    <Layout className="w-full h-screen">
      <Sider className="!bg-yellow-200">
        <div className="text-amber-900 font-bold">
          <h1 className="text-3xl text-center py-3">PMH관리자</h1>
          <Menu
            onClick={handleMenu}
            selectedKeys={currentMenu}
            items={items}
          ></Menu>
        </div>
      </Sider>
      <Layout>
        <Header className="!bg-blue-600" style={{ padding: 0 }}>
          <Menu
            onClick={handleMenu}
            selectedKeys={currentMenu}
            items={items}
            mode="horizontal"
          ></Menu>
        </Header>
        <Content>
          <h1 className="text-5xl">Content</h1>
          <Row>
            <Col xs={24} lg={4}>
              <h1>제목</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Col>
            <Col xs={12} lg={4}>
              <h1>제목</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Col>
            <Col xs={12} lg={4}>
              <h1>제목</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Col>
          </Row>
          <Image
            width={400}
            src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
          />
        </Content>
        <Footer>FOOTER</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
