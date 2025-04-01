// src/App.jsx
import React from 'react';
import AddPost from './components/AddPost';
import PostsList from './components/PostList';

const App = () => {
  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>📘 React Query 예제</h1>

      <section style={{ marginBottom: '40px' }}>
        <h2>📋 게시물 목록</h2>
        <PostsList />
      </section>

      <section>
        <h2>➕ 게시물 추가</h2>
        <AddPost />
      </section>
    </div>
  );
};

export default App;
