"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
fs.readFile('input.txt', 'utf8', function (err, data) {
    if (err) {
        console.log(err);
        return;
    }
    // Split the file content by space to get each word in an array
    var wordsArray = data.split(' ');
    // Log the word array
    console.log(wordsArray);
});
