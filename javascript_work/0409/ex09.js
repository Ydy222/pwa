function doA(){
    console.log(arguments);
    console.log(arguments.length);

    // arguments Symbol.iterator
    for (const element of arguments) {
        console.log(element)
    }
}

doA(10,20,30,40,50);