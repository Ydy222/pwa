import React from 'react';
import {Card, Col, Layout, Row} from "antd";
import styles from "./TodoPage.module.css";
import {Outlet} from "react-router-dom";

const {Content}
    = Layout;

function TodoPage(props) {
    return (
        <>
            <Content className={styles.content}>
                <Card>
                    <h1 style={{fontSize:'2rem'}}>Hello Todo List</h1>
                    <Outlet/>
                </Card>
            </Content>
        </>

    );
}

export default TodoPage;