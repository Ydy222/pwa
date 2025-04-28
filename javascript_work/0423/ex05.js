const throttle = () => {
  let timerId;
  return () => {
    console.log("test");
    if (timerId) return;
    timerId = setTimeout(() => {
      console.log("콜백함수 호출됨");
      clearTimeout(timerId);
      timerId = undefined;
    }, 300);
  };
};

const aa = throttle();

aa();
aa();
aa();
aa();
aa();
aa();
aa();
aa();aa();
aa();
aa();
aa();aa();
aa();
aa();
aa();aa();
aa();
aa();
aa();aa();
aa();
aa();
aa();aa();
aa();
aa();
aa();