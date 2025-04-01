// PostList.jsx
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

async function fetchPosts() {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
}

function PostsList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['posts'],        // ✅ 키는 반드시 queryKey로 명시
    queryFn: fetchPosts,        // ✅ 함수는 queryFn으로 명시
  });

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>오류 발생!</p>;

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default PostsList;