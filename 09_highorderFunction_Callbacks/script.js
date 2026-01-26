// High Order Functions and Callback

function add(a, b, cb) {
    let result = a + b;
    cb(result);

    return () => console.log(result);
}

add(2, 4, function(val) {
    console.log(val);
})

add(2, 4, (val) => console.log(val));

// you can use a function to return a function -

function add(a, b, cb) {
    let result = a + b;
    cb(result);

    return () => console.log(result);
}

let resultFunction = add(10, 4, () => {});
resultFunction();