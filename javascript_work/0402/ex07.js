const url = "https://www.naver.com/index.htm";

const re = /^https?:\/\/[\w]+.[\w]+.[\w]+\/[\w]+.html?$/;

// 주소가 url이 맞는지 확인
console.log(re.test(url));
console.log(url.match(re));