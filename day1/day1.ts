import fs = require('fs');
fs.readFile('input.txt', 'utf8', function(err, data) {
    if (err) {
        console.log(err);
        return;
    }

    let wordsArray = data.split(/\s+/);
    wordsArray = wordsArray.map(element => {
        element = element.replace(/^\D+|\D+$|(?<=\d)[\s\S]*(?=\d)/g, '');
        // check if the element's length is 1 and that it's a digit, if so duplicate it
        if(element.length === 1 && /\d/.test(element)) {
            element = element.repeat(2);
        }
        return element;
    });
    const sum = wordsArray.reduce((acc, curr) => acc + Number(curr), 0);

    console.log(sum);
});