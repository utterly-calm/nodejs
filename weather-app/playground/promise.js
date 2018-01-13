var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('Arguments must be number.');
        }
    });
};

asyncAdd(5, 7).then((res) => {
    console.log(`Result: ${res}`);
    return asyncAdd(res, 33);
}).then((res) => {
    console.log(`Result 2: ${res}`);
}).catch((errorMessage) => {
    console.log(errorMessage);
});

// var somePromise = new Promise((resolve, reject) => {
//     // resolve('It worked!');
//     reject(`Promise didn't fullfilled`);
// });

// somePromise.then((message) => {
//     console.log(message);
// }, (errorMessage) => {
//     console.log(errorMessage);
// });