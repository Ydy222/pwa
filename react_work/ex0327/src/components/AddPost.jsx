import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

// POST API 요청 함수
const addPost = async (newPost) => {
  return await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
};

function AddPost() {
  const queryClient = useQueryClient(); // 캐시 갱신에 사용
  const mutation = useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] }); // posts 데이터 다시 가져오기
    },
  });

  const handleSubmit = () => {
    mutation.mutate({ title: '새 게시물', body: '내용입니다.', userId: 1 });
  };

  return (
    <div>
      <button onClick={handleSubmit} disabled={mutation.isLoading}>
        {mutation.isLoading ? '저장 중...' : '게시물 추가'}
      </button>
      {mutation.isError && <p>오류 발생!</p>}
    </div>
  );
}

export default AddPost;