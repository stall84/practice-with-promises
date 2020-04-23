

let promiseToClean = new Promise((resolve,reject) => {

    //stuff gets cleaned
    let isClean = false;

    if (isClean) {
        resolve('Clean!');
    } else {
        // passing 'nope' to see where it will come out in error below
        reject(Error("NOPE"));
    }

});

promiseToClean.then((cheese) => {
    // using completely arbitrary 'cheese' to prove it's just an argument & could be anything
    console.log('It is ' + cheese);
}, (err) => {
    console.log(err)
});