async function post() {
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;
    const file = document.querySelector('#file').files[0];
    if (!title) {
        alert('타이틀을입력하세요');
        return;
    } else if (!content) {
        alert('내용을 입력하세요');
        return;
    }
    if (!file) {
        savePost(title, content);
    } else {
        const fileUrl = await uploadFile(file);
        savePost(title, content, fileUrl);
    }
    //조회
    fetchPosts();
}
async function savePost(title, content, fileUrl = '') {
    const user = sessionStorage.getItem('user');
    if (user == null) {
        alert('로그인이 필요합니다.');
        location.href = 'login.html';
        return;
    }
    const user_id = JSON.parse(user).id;

    const res = await supabase.from('post').insert([{ title, content, user_id, image_url: fileUrl }]).select();
    if (res.status === 201) {
        Swal.fire({
            title: '저장 성공',
            icon: 'success',
            confirmButtonText: '확인'
        });
    } else {
        Swal.fire({
            title: '저장 실패',
            icon: 'error',
            confirmButtonText: '확인'
        });
    }
}
async function uploadFile(file) {
    const filename = `${crypto.randomUUID()}.${file.name.split('.').pop()}`;
    await supabase.storage.from('ex01').upload(filename, file);
    const res = await supabase.storage.from('ex01').getPublicUrl(filename);
    return res.data.publicUrl;
}
async function fetchPosts() {
    const res = await supabase.from('post').select('*').order('created_at', { ascending: false });
    // error가 내용이 있으면 true 내용이 없으면 false
    if (res.error) {
        alert('에러발생');
        return;
    }

    const $postList = document.querySelector('#post-list');
    $postList.style.display = 'grid';
    $postList.style.gridTemplateColumns = '1fr 1fr 1fr';
    // 원래꺼를 삭제하고 추가 하는 겁니다.
    $postList.innerHTML = "";
    res.data.forEach(data => {
        // div태그 만들어라
        const post = document.createElement('div');
        post.innerHTML = `
                        <h3>${data.title}</h3>
                        <p>${data.content}</p>
                        <img src='${data.image_url}' width='250'/>
                        <div>
                            <button>수정</button>
                            <button onclick='deletePost("${data.id}")'>삭제</button>
                        </div>
                    `;
        $postList.appendChild(post);
    });
}

async function deletePost(id) {
    const res = await supabase.from('post').delete().eq('id', id);
    console.log(res);
    const { error } = res;
    if (error){
        alert('에러 발생 삭제 실패');
    }else{
        Swal.fire('완료','게시글이 삭제 되었습니다.','success');
        fetchPosts();
    }

}

document.addEventListener('DOMContentLoaded', fetchPosts);