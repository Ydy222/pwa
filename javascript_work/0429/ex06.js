// fetch then then
fetch("https://6809e0571f1a52874cde2b14.mockapi.io/todos/1")
  .then((res) => {

    // res 이 상태값이 정상적으로 요청할수 있다.

    console.log(res);
    // console.log('여기 들렸다가 가요')
    // return "test";  // 프로미스<fullfilled상태>

    // stream 상태에 body 내용을 읽어서 json 형태로 만들어서
    // Promise 상태로 변경
    return res.json();
  })
  .then((result) => {
    console.log("result",result);
  })
  .catch((e) => {
    console.log(e);
  });
