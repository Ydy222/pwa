// TodoList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../thunk/todoSlice';

const TodoList = () => {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state) => state.todos);

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1>Todo List (Persisted with Redux)</h1>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {items.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
