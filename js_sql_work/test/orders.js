document.querySelector('#input-button-order').addEventListener('click', async function () {
    let user = sessionStorage.getItem('user');
    /*
        object -> String 으로 변환
        JSON.stringfy(변수)
        String -> Object 으로 변환
        JSON.parse(변수)

        const aa = { a:10, b:20 };
        JSON.stringify(aa); // -> "{a:10,b:20}"
        const cc = "{a:10,b:20}";
        const dd = JSON.parse(cc);
    */
    if (user == null) {
        alert('로그인하셔야 주문등록 할 수 있습니다.');
    }
    else {
        `{
            "id":"146c50d3-283f-49b9-81ff-59c06ab8df66",
            "name":"qwerqwer",
            "email":"aaaa",
            "created_at":"2025-03-07T05:53:59.228802",
            "active":true
        }`
        user = JSON.parse(user);
    }

    const product_name = document.querySelector('#product_name').value;
    const price = document.querySelector('#price').value;

    if (price.length == 0) {
        await Swal.fire({
            icon: "error",
            title: "입력 실패",
            text: "가격을 입력하셔야 합니다.",
            // footer: '<a href="#">Why do I have this issue?</a>'
        });
        return;
    }
    else if (!(/^[0-9]+(\.[0-9]+)?$/.test(price))) {
        await Swal.fire({
            icon: "error",
            title: "입력 실패",
            text: "가격은 숫자를 입력하셔야 합니다.",
            // footer: '<a href="#">Why do I have this issue?</a>'
        });
        return;
    }

    const res = await supabase
        .from('orders')
        .insert([
            { product_name, price, user_id: user.id }
        ]).select();
    console.log(res)
})



document.querySelector('#update-button-order').addEventListener('click', async function () {
    const orderId = document.querySelector('#update-order-id').innerHTML;
    const orderUserId = document.querySelector('#update-order-user-id').innerHTML;
    const product_name = document.querySelector('#update-product-name').value;
    const price = document.querySelector('#update-price').value;

    const res = await supabase
        .from('orders')
        .update({
            product_name,
            price
        })
        .eq('id', orderId)
        .select();
    if (res.status == 200) {
        const $modal = document.querySelector('#order-modal');
        $modal.classList.add('hidden');
        await Swal.fire({
            title: "수정성공",
            icon: "success",
            draggable: true
        });
        ordersSelect();
    }
})

async function ordersSelect() {
    let user = sessionStorage.getItem('user');
    if (user == null) {
        alert('주문 목록 조회는 로그인 하셔야 됩니다.');
        return;
    }
    else {
        user = JSON.parse(user);
    }
    const $orderDiv = document.querySelector('#orders-div');

    const res = await supabase
                    .from('orders')
                    .select()
                    .eq('user_id', user.id)
                    .order('created_at', { ascending: false });
    let rows = '';
    for (let i = 0; i < res.data.length; i++) {
        rows = rows + `
            <tr style="cursor:pointer" onclick="orderRowClick(this);">
                <td>${res.data[i].id}</td>
                <td>${res.data[i].user_id}</td>
                <td>${res.data[i].product_name}</td>
                <td>${res.data[i].price}</td>
                <td>${res.data[i].created_at}</td>
            </tr>
        `;
    }
    let orders = `
    <div>
        <table>
            <tr>
                <th>id</th>
                <th>userid</th>
                <th>상품명</th>
                <th>가격</th>
                <th>주문날짜</th>
            </tr>
            ${rows}
        </table>
    </div>
    `;
    $orderDiv.innerHTML = orders;
    $orderDiv.classList.add('show');
}

function orderRowClick(trTag) {
    // alert(trTag);
    const $orderModal = document.querySelector('#order-modal');
    $orderModal.classList.remove('hidden');

    const orderId = trTag.children[0].innerText;
    const userId = trTag.children[1].innerText;
    const product_name = trTag.children[2].innerText;
    const price = trTag.children[3].innerText;

    document.querySelector('#update-order-id').innerHTML = orderId;
    document.querySelector('#update-order-user-id').innerHTML = userId;
    document.querySelector('#update-product-name').value = product_name;
    document.querySelector('#update-price').value = price;
}