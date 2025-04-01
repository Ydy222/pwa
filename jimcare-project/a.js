var x = 10;
function add(x, y) {
    return x+y;
}

// INSERT
// await 슈파베이스에 가서 insert 하는거 다 끝날때까지 기다려라
// await 사용하면 async 써야됨...

// float left right overflow hidden 겹치는거 해결해야됨.

async function insertData(dbCon) {
    await dbCon.from('test').insert([{ comment: '내가 insert해야지', writer: 'ㅂㅈㄷㄱ' }]);
}

async function selectData(dbCon) {
    const res = await dbCon.from('test').select('*');
    console.log(res);
    return res.data;
}














