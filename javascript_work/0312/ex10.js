const a = () => {
    console.log(this);
}

const b = {
    aa: 20,
    bb() {
        const c = () => { console.log(this); }
        c();
    }
}

a();
b.bb();