/*
    1. js addEventListner
    2. html 직접 적을수 있고 onclick
*/

document.querySelector('#input-button-user').addEventListener('click', async function () {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    // console.log(`name = ${name}`);
    // console.log(`email = ${email}`);

    if (email.length == 0) {
        Swal.fire({
            icon: "error",
            title: "입력 실패",
            text: "email이 빈값입니다.",
            // footer: '<a href="#">Why do I have this issue?</a>'
        })
        return;
    }

    const res = await supabase
        .from('users')
        .insert([
            { name, email }
        ])
        .select();
    console.log(res);
    if (res.status === 409) {
        await Swal.fire({
            icon: "error",
            title: "입력 실패",
            text: "user입력에 실패하였습니다. email을 중복입니다.",
            // footer: '<a href="#">Why do I have this issue?</a>'
        });
        // await Swal.fire({
        //     title: "<strong>HTML <u>새로운예제</u></strong>",
        //     icon: "info",
        //     html: `
        //       Yㅁ니아러ㅜ미나어뤼나어루<b>bold text</b>,
        //       <a href="#" autofocus>links</a>,
        //       and other HTML tags
        //     `,
        //     showCloseButton: true,
        //     showCancelButton: true,
        //     focusConfirm: false,
        //     confirmButtonText: `
        //       <i class="fa fa-thumbs-up"></i> Great!
        //     `,
        //     confirmButtonAriaLabel: "Thumbs up, great!",
        //     cancelButtonText: `
        //       <i class="fa fa-thumbs-down"></i>
        //     `,
        //     cancelButtonAriaLabel: "Thumbs down"
        // });
    }
    else if (res.status === 201) {
        await Swal.fire({
            title: "저장성공",
            icon: "success",
            draggable: true
        });
        usersSelect();
    }
})
document.querySelector('#update-button-user').addEventListener('click', async function () {
    const $updateUserId = document.querySelector('#update-user-id');
    const $updateName = document.querySelector('#update-name');
    const $updateEmail = document.querySelector('#update-email');

    const res = await supabase
        .from('users')
        .update({
            name: $updateName.value,
            email: $updateEmail.value
        })
        .eq('id', $updateUserId.innerHTML)
        .select();

    // console.log(res.status);
    if (res.status == 200) {
        const $modal = document.querySelector('#user-modal');
        $modal.classList.add('hidden');
        await Swal.fire({
            title: "수정성공",
            icon: "success",
            draggable: true
        });
        usersSelect();
    }
})
// $usersDiv.innerHTML = 'asdfasdf';
// $usersDiv.style.backgroundColor = 'rgb(200,100,200)';
// 유저테이블 내용 가져와서 출력하는 함수
async function usersSelect() {
    const $usersDiv = document.querySelector('#users-div');
    const res = await supabase.from('users').select().order('created_at', { ascending: false })
    let rows = '';
    for (let i = 0; i < res.data.length; i++) {
        rows = rows + `
            <tr onclick='userRowClick(this);' style='cursor:pointer;'>
                <td>${res.data[i].id}</td>
                <td>${res.data[i].name}</td>
                <td>${res.data[i].email}</td>
                <td>${res.data[i].created_at}</td>
                <td>${res.data[i].active}</td>
                <td><button onclick='userDeleteClick(event, "${res.data[i].id}")'>삭제</button</td>
            </tr>
        `;
    }
    let users = `
    <div>
        <table>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>가입날짜</th>
                <th>활성화</th>
                <th></th>
            </tr>
            ${rows}
        </table>
    </div>
    `;
    $usersDiv.innerHTML = users;
    $usersDiv.classList.add('show');
}

function userRowClick(trTag) {
    // innerHTML => html 코드가 적용 되는것 <ul> <img>
    // innerText => html 코드가 적용이 안되는것 <img>글자출력이
    const $updateUserId = document.querySelector('#update-user-id');
    const $updateName = document.querySelector('#update-name');
    const $updateEmail = document.querySelector('#update-email');

    const userId = trTag.children[0].innerText;
    const userName = trTag.children[1].innerText;
    const userEmail = trTag.children[2].innerText;

    $updateUserId.innerHTML = userId;
    $updateName.value = userName;
    $updateEmail.value = userEmail;

    const $modal = document.querySelector('#user-modal');
    $modal.classList.remove('hidden');
}

function userDeleteClick(ev, id) {
    ev.stopPropagation(); // 다른 이벤트 걸린거 막아라
    Swal.fire({
        title: "삭제하시겠습니까?",
        text: "삭제하시게되면 복원하실수 없습니다.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "확인",
        cancelButtonText: "취소"
    }).then((result) => {
        if (result.isConfirmed) {
                supabase
                    .from('users')
                    .delete()
                    .eq('id',id)
                .then(() => {
                    usersSelect();
                });
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    });
}