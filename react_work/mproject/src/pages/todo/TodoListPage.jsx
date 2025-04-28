import React, {useEffect, useState} from 'react';
import {Button, Table, Tag} from "antd";
import {useNavigate} from "react-router-dom";

function TodoListPage(props) {
    const [todos, setTodos] = useState([
        {"id": 1, "todo": "Do something nice for someone you care about", "completed": false, "userId": 152},
        {"id": 2, "todo": "Do someone you care about", "completed": true, "userId": 152}
    ]);
    const navigate = useNavigate();

    useEffect(() => {
        // console.log(todos);
    }, []);

    const columns = [
        {
            title: "Id",
            dataIndex: "id",
            key: "id",
            width: 80,
            // render : (a,b)=>{
            //     console.log("a = "+a);
            //     console.log("b = "+JSON.stringify(b));
            //     return (<h1>{b.id}</h1>)
            // }
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
                    { String(completed) === 'true' ? "완료" : "미완료"}
                </Tag>
            )
        },
        {
            title: '사용자',
            dataIndex: "userId",
            key: "userId",
        }
    ];

    const loadData = async () => {
        // fetch('https://6809e0571f1a52874cde2b14.mockapi.io/todos?sortBy=id&order=desc')
        fetch('https://6809e0571f1a52874cde2b14.mockapi.io/todos')
            .then(res => res.json())
            .then(data => {
                const sortedData = data.sort((a, b) => b.id - a.id);
                setTodos(sortedData);
            })
    }
    return (
        <div>
            <h1>목록</h1>
            <div style={{ display: "flex", gap:"1rem", marginTop:"1rem", marginBottom:"1rem" }}>
                <Button type="primary" onClick={loadData}>조회</Button>
                <Button type="primary" onClick={()=>{ navigate('/todo/modify/3')}}>수정</Button>
                <Button type="primary" >삭제</Button>
            </div>
            <Table dataSource={todos} rowKey="id" columns={columns}>
            </Table>
            {
                todos.map(todo => {
                    return (<h1 key={todo.id}>{todo.todo}</h1>)
                })
            }
        </div>
    );
}

export default TodoListPage;