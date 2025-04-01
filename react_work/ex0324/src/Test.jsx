import BB from "./BB";

function Test() {
    // console.log("test");
    return (
        <>
            <div>
                {BB({ aa: 32, bb: 42 })}
                <BB aa="10" bb="20"></BB>   {/* 가독성이 굳 */}
                <h1>TEST</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti explicabo nesciunt quos voluptatum tempore reiciendis magnam saepe voluptas adipisci amet tempora maiores fuga, quisquam rerum laborum unde! Quo, provident iste?</p>
            </div>
        </>
    )
}

export default Test;