function parseURL(url = "") {
  console.log(`url ${url}`);

  // const aa = 10;
  // return { aa };
  // { aa:10 }

  // ^(\w)+ http https
  // :\/\/ ://
  // ([^/])+  슬러시(/)아닌거 여기까지
  // (.*) 슬러시(/) 이후문자전부다

  const ma = url.match(/^(\w+):\/\/([^/]+)\/(.*)$/);
  // console.log(ma);
  const [, protocol, host, path] = ma;
  return { protocol, host, path };
}

const result = parseURL("http://www.naver.com/aa/bb/cc");
console.log(result);
