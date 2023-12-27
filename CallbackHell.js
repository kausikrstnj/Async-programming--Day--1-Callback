// Pain of callback or callback hell
// nested callbacks

let ten = function (callback) {

    setTimeout(() => {
        console.log('10');
        callback();
    }, 1000);
}

let nine = function (callback) {
    setTimeout(() => {
        console.log('9');
        callback();
    }, 1000);
}

let eight = function (callback) {
    setTimeout(() => {
        console.log('8');
        callback();
    }, 1000);
}

let seven = function (callback) {
    setTimeout(() => {
        console.log('7');
        callback();
    }, 1000);
}

let six = function (callback) {
    setTimeout(() => {
        console.log('6');
        callback();
    }, 1000);
}

let five = function (callback) {
    setTimeout(() => {
        console.log('5');
        callback();
    }, 1000);
}

let four = function (callback) {
    setTimeout(() => {
        console.log('4');
        callback();
    }, 1000);
}

let three = function (callback) {
    setTimeout(() => {
        console.log('3');
        callback();
    }, 1000);
}

let two = function (callback) {
    setTimeout(() => {
        console.log('2');
        callback();
    }, 1000);
}

let one = function (callback) {
    setTimeout(() => {
        console.log('1');
        callback();
    }, 1000);
}


let ind = function (callback) {
    setTimeout(() => {
        console.log('Happy Independance Day');
        // callback();
    }, 1000);
}

// callback hell or pain of callback
ten(function () {
    nine(function () {
        eight(function () {
            seven(function () {
                six(function () {
                    five(function () {
                        four(function () {
                            three(function () {
                                two(function () {
                                    one(function () {
                                        ind(function () {

                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});