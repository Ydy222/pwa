import React, {useEffect, useState} from 'react';
import {Card, Layout, Table} from "antd";
import {getUsers} from "../../database/userManager.js";

const {Content} = Layout;

function UserListPage(props) {

    const columns = [
        {title: "Name", dataIndex: "name"},
        {title: "email", dataIndex: "email"},
        {title: "age", dataIndex: "age"},
        {title: "phone", dataIndex: "phone"},
    ];
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        async function loadData() {
            const {data} = await getUsers();
            setDataSource(data);
        }
        loadData();
    }, []);

    return (
        <Content>
            <Card hoverable style={{margin: '1rem'}}>
                <h1>안녕하세요</h1>
                <Table columns={columns} dataSource={dataSource} rowKey="id">
                </Table>
            </Card>
        </Content>
    );
}

export default UserListPage;
