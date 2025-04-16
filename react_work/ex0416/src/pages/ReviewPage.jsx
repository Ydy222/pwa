import React from 'react';
import {Card, Col, Layout, Row} from "antd";
import styles from "./ReviewPage.module.css";
const {Content} = Layout;

function ReviewPage(props) {
    return (
        <Content className={styles.content}>
            <Row gutter={[16, 16]}>
                <Col className={styles.col} xs={24} sm={12} md={8}>
                    TEST
                </Col>
                <Col className={styles.col} xs={24} sm={12} md={8}>
                    TEST
                </Col>
                <Col className={styles.col} xs={24} sm={12} md={8}>
                    TEST
                </Col>
            </Row>
        </Content>
    );
}

export default ReviewPage;