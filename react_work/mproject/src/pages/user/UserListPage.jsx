import React, {useEffect, useState} from 'react';
import {Button, Card, Form, Input, Layout, message, Modal, notification, Popconfirm, Table} from "antd";
import {deleteUserByIds, getUsers, updateUserById} from "../../database/userManager.js";

const {Content} = Layout;

function UserListPage(props) {

    const columns = [
        {title: "Name", dataIndex: "name"},
        {title: "email", dataIndex: "email"},
        {title: "age", dataIndex: "age"},
        {title: "phone", dataIndex: "phone"},
    ];
    const [dataSource, setDataSource] = useState([]);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const [findUser, setFindUser] = useState({});
    const [form] = Form.useForm();

    async function loadData() {
        const {data} = await getUsers();
        setDataSource(data);
    }

    const rowSelection = {
        selectedRowKeys: selectedRowKeys,
        onChange: (newSelectedRowKeys) => {
            setSelectedRowKeys(newSelectedRowKeys);
        },
    };

    async function handleEdit() {
        if (selectedRowKeys.length !== 1) {
            message.warning('수정할려고 하는 사용자 한명 선택해주세요');
            return;
        }
        const target = dataSource.find(user => user.id === selectedRowKeys[0]);
        setFindUser(target);
        form.setFieldsValue(target);
        setShowModal(true);
    }

    async function handleDelete() {
        const {error} = await deleteUserByIds(selectedRowKeys);
        // 에러는 null값일때 성공한것
        // 에러에 값이 있으면 실패..
        if (error) {
            message.error(error);
        } else {
            // message.success('삭제하였습니다.');
            notification.success({
                message: "삭제하였습니다."
            })
            setSelectedRowKeys([]);
            loadData();
        }
    }

    async function handleModalOk() {
        const values = form.getFieldsValue();
        // message.info('누르,ㅁ');
        // message.info(findUser.id);
        // console.log(values);

        const {error}
            = await updateUserById(findUser.id, values);
        if (error) {
            if (error.code === '22P02') {
                message.error('나이는 숫자를 입력하세요');
                return;
            }
        } else {
            message.success('성공적으로 수정하였습니다.');
            loadData();
        }

        setShowModal(false);
        setSelectedRowKeys([]);
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <Content>
            <Card hoverable style={{margin: '1rem'}} styles={{overflowX: 'auto'}}>
                <h1>안녕하세요</h1>
                <div style={{margin: '1rem 0'}}>
                    <Popconfirm title="삭제하시겠습니까?" onConfirm={handleDelete}>
                        <Button danger disabled={selectedRowKeys.length === 0}>삭제</Button>
                    </Popconfirm>
                    <span style={{marginRight: '1rem'}}></span>
                    <Button type="primary" onClick={handleEdit}>수정</Button>
                </div>
                <Modal
                    title={"사용자수정"}
                    open={showModal}
                    onCancel={() => setShowModal(false)}
                    onOk={handleModalOk}
                >
                    <Form layout={'vertical'} form={form}>
                        <Form.Item label="이름" name="name" rules={[{required: true}]}>
                            <Input></Input>
                        </Form.Item>
                        <Form.Item label="email" name="email" rules={[{required: true, type: 'email'}]}>
                            <Input></Input>
                        </Form.Item>
                        <Form.Item label="age" name="age" rules={[{required: true}]}>
                            <Input></Input>
                        </Form.Item>
                        <Form.Item label="phone" name="phone" rules={[{required: true}]}>
                            <Input></Input>
                        </Form.Item>
                    </Form>
                </Modal>
                <Table
                    columns={columns}
                    dataSource={dataSource}
                    rowKey="id"
                    rowSelection={rowSelection}
                    scroll={{x: 'max-content'}}
                    style={{width: '100%'}}
                >
                </Table>

            </Card>
        </Content>
    )
        ;
}

export default UserListPage;
