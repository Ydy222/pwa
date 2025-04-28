import React from 'react';
import {Outlet} from "react-router-dom";
import {Card, Layout } from 'antd';

const {Content} = Layout;

function ReviewPage(props) {
    return (
        <Content style={{padding:'1rem'}}>
            <Card>
                <div>Review</div>
                <Outlet/>
            </Card>
        </Content>
    );
}

export default ReviewPage;