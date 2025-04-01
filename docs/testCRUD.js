var x = 10;
function add(x, y) {
    return x+y;
}

// INSERT
// await 슈파베이스에 가서 insert 하는거 다 끝날때까지 기다려라
// await 사용하면 async 써야됨...

// float left right overflow hidden 겹치는거 해결해야됨.

async function insertData(comment, writer) {
    await dbCon.from('test').insert([{ comment, writer}]);
}

async function selectData(dbCon) {
    const res = await dbCon.from('test').select('*');
    console.log(res);
    return res.data;
}

async function deleteData(deleteArr) {
    console.log(deleteArr);
    const res = await dbCon.from('test').delete().in('id',deleteArr);
    console.log(res);
    return res.data;
}

async function updateData(comment, writer, id) {
    const res = await dbCon.from('test').update({comment,writer}).eq('id',id);
    console.log(res);
    return res.data;
}















