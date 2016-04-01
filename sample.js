#!/usr/bin/env node

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function assyriaQuestion() {
    rl.question("What... is the capital of Assyria?", function (response) {
        console.log("[he is thrown over the edge into the ravine by an unseen force] ")
        rl.close();
    })

}

function swallowQuestion() {
    rl.question("What... is the air-speed velocity of an unladen swallow?", function (response) {
        if (response.endsWith("?"))
            console.log("Huh? I... I don't know that. [he is thrown over by his own spell] AUUUUUUUGGGGGGGGGGGHHH!!")
        else
            console.log("Nobody expects spanish inquisition!")
        rl.close();
    })

}

function colorQuestion(name) {
    rl.question("What... is your favourite colour?", function (response) {
        switch (response.toLowerCase()) {
        case "blue":
            if (name == "Lancelot") {
                console.log("Right. Off you go.");
            } else {
                console.errow("[he is thrown over the edge] YEELLLLLLLLLLLLOOOOOOOOWWWWWWWW!");
            }
        default:
            console.log("Nobody expects spanish inquisition!")
        }
        rl.close();
    })
}

function questQuestion(name) {
    rl.question("What... is your quest?", function (response) {
        switch (response.toLowerCase()) {
        case "to seek the holy grail":
            if (name == "Lancelot" || name == "Galahad")
                colorQuestion(name);
            if (name == "Robin")
                assyriaQuestion();
            if (name == "Arthur")
                swallowQuestion();
            break;
        default:
            console.log("Nobody expects spanish inquisition!")
            rl.close();
        }
    })
}

function nameQuestion() {
    rl.question("What... is your name?", function (response) {

        switch (response) {
        case "Lancelot":
        case "Robin":
        case "Galahad":
        case "Arthur":
            questQuestion(response);
            break;


        default:
            console.log("Nobody expects spanish inquisition!")
            rl.close();
        }


    })
}

nameQuestion();
