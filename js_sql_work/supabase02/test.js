const test = [
    {
        "id": "dc54719d-807a-446c-89b5-722f6b39943b",
        "name": "Alice",
        "email": "alice@example.com",
        "created_at": "2025-03-05T06:01:58.452066",
        "active": true
    },
    {
        "id": "d8b9369f-dcf0-4362-9ad4-58a12f084a23",
        "name": "asdfasdf",
        "email": "Bob@naver.com",
        "created_at": "2025-03-05T06:05:19.251045",
        "active": true
    },
    {
        "id": "c4fd937b-cfe6-4ad1-adf7-6ea35b1fb64d",
        "name": "홍길동",
        "email": "hong@example.com",
        "created_at": "2025-03-06T05:34:05.558157",
        "active": true
    }
]
let rows = '';
for(let i = 0; i<test.length;i++){
    rows = rows + `
        <tr>
            <td>${test[i].id}</td>
            <td>${test[i].name}</td>
            <td>${test[i].email}</td>
            <td>${test[i].created_at}</td>
            <td>${test[i].active}</td>
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
        </tr>
        ${rows}
    </table>
</div>
`;

console.log(users);