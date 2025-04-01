function FUNC(){
    console.log(new.target);
}

FUNC();
new FUNC();

