import React, {useEffect, useState} from 'react';
import {Button, message, Table, Tag} from "antd";
import {useNavigate} from "react-router-dom";
import {todosReq} from "../../api/mockapi.js";

function TodoListPage(props) {
    const [todos, setTodos] = useState([]);
    const navigate = useNavigate();
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const columns = [
        {
            title: "Id",
            dataIndex: "id",
            key: "id",
            width: 80,
        },
        {
            title: "할일",
            dataIndex: "todo",
            key: "todo",
        },
        {
            title: "완료 여부",
            key: "completed",
            dataIndex: "completed",
            render: (completed, record) => (
                // <select>
                //     { completed ? (<option>완료</option>) : (<option>미완료</option>) }
                // </select>
                <Tag color={String(completed) === 'true' ? 'green' : 'volcano'}>
                    {String(completed) === 'true' ? "완료" : "미완료"}
                </Tag>
            )
        },
        {
            title: '사용자',
            dataIndex: "userId",
            key: "userId",
        }
    ];

    const rowSelection = {
        selectedRowKeys: selectedRowKeys,
        onChange: (newselectedRowKeys) => {
            setSelectedRowKeys(newselectedRowKeys);
        }
    }

    const loadData = async () => {
        // fetch('https://6809e0571f1a52874cde2b14.mockapi.io/todos?sortBy=id&order=desc')
        fetch('https://6809e0571f1a52874cde2b14.mockapi.io/todos')
            .then(res => res.json())
            .then(data => {
                const sortedData = data.sort((a, b) => b.id - a.id);
                setTodos(sortedData);
            })
    }

    // useEffect 제일 처음에 한번만 호출 됩니다.
    useEffect(() => {
        loadData();
    }, [])

    const hadleDelete = () => {
        const result = [];
        selectedRowKeys.forEach(id => {
            todosReq.delete(id)
                .then(res =>{
                    result.push(res);
                    if(result.includes(200)){
                        message.success("삭제되었습니다");
                        loadData(); // 불러오기...
                    }
                });
        })
    }

    return (
        <div>
            <h1>목록</h1>
            <div style={{display: "flex", gap: "1rem", marginTop: "1rem", marginBottom: "1rem"}}>
                <Button type="primary" onClick={loadData}>조회</Button>
                <Button type="primary" onClick={() => {
                    if (selectedRowKeys.length !== 1) {
                        message.warning('한개의 행 선택하세요');
                        return; // 함수 종료
                    }
                    navigate(`/todo/modify/${selectedRowKeys[0]}`); //페이지이동해라
                }}>수정</Button>
                <Button type="primary" onClick={hadleDelete}>삭제</Button>
            </div>
            {
                todos.length === 0 ?
                    (<h1>불러오는중</h1>)
                    :
                    (<Table rowSelection={rowSelection} dataSource={todos} rowKey="id" columns={columns}></Table>)
            }

            {/*<Table rowSelection={rowSelection} dataSource={todos} rowKey="id" columns={columns}>*/}
            {/*</Table>*/}
            {
                todos.map(todo => {
                    return (<h1 key={todo.id}>{todo.todo}</h1>)
                })
            }
        </div>
    );
}

export default TodoListPage;