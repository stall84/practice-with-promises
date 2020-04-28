

let promiseToClean = new Promise((resolve,reject) => {

    //stuff gets cleaned
    let isClean = true;

    if (isClean) {
        resolve('Clean!');
    } else {
        // passing 'nope' to see where it will come out in error below
        reject(Error("NOPE"));
    }

});

/*
promiseToClean.then((res) => {
    // using completely arbitrary 'cheese' to prove it's just an argument & could be anything
    console.log('It is ' + res);
}, (err) => {
    console.log(err)
});
*/

//Tyler McGinnis youtube vid example https://www.youtube.com/watch?v=gB-OmN1egV8

function onSuccess () {
    console.log('Success!!');
};

function onError () {
    console.log('Whoopsishat!');
};

var newProm = new Promise ((resolve, reject) => {
    let cracker = true; // arbitrary condition to use in testing below
    setTimeout( () => {
        if (!cracker) {
            resolve() // fulfilled after 'delay'
        } else {
            reject(); // rejected after 'delay'
        }   
    }, 2250)
})

newProm.then(onSuccess);
newProm.catch(onError);