#!/usr/bin/env node

var delayed = function (value, timeout) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, timeout, value);
    })
}

var user = function (prompt) {
    var readline = require('readline');

    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise(function (resolve, reject) {
        rl.question(prompt, function (answer) {
            resolve(answer);
            rl.close();
        })
    })
}

delayed(33, 1000).then(function (value) {
    return value / 11;
}).then(function (value) {
    return Promise.all([value, delayed(value, 5000), user("Value? ")])
}).then(console.log);
