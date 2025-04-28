import pkg from 'lodash';
const { debounce, throttle } = pkg;

const aa = debounce(() => {
  console.log("debounce");
}, 300);

aa();
aa();
aa();
aa();
aa();

const bb = throttle(() => {
    console.log("lodash");
  }, 300);
  
  bb();
  bb();
  bb();
  bb();
  bb();