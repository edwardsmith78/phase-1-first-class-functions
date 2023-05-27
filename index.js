function receivesAFunction (callback) {
    callback();
}

function returnsANamedFunction() {
    return function myNamedFunction() {
        console.log("a named function");
    };
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("anonymous function");
    }
    }