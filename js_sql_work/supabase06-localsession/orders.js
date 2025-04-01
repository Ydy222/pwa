document.querySelector('#input-button-order').addEventListener('click', async function () {
    const product_name = document.querySelector('#product_name').value;
    const price = document.querySelector('#price').value;

    const user = await supabase.auth.getUser();

    if (!user.data.user) {
        console.error("로그인되지 않음");
        return;
    }

    const { data, error } = await supabase
        .from('orders')
        .insert([{ user_id: user.data.user.id, product_name: product_name, price }])
        .select();

    if (error) {
        console.error("데이터 추가 실패:", error.message);
    } else {
        console.log("주문 추가 성공:", data);
    }
    console.log(data)
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
    const $orderDiv = document.querySelector('#orders-div');
    const user = await supabase.auth.getUser();

    if (!user.data.user) {
        console.error("로그인되지 않음");
        return;
    }

    const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('user_id', (await supabase.auth.getUser()).data.user.id);

    if (error) {
        console.error("데이터 조회 실패:", error.message);
    } else {
        console.log("내 주문 데이터:", data);
    }
    let rows = '';
    for (let i = 0; i < data.length; i++) {
        rows = rows + `
            <tr style="cursor:pointer" onclick="orderRowClick(this);">
                <td>${data[i].id}</td>
                <td>${data[i].user_id}</td>
                <td>${data[i].price}</td>
                <td>${data[i].created_at}</td>
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