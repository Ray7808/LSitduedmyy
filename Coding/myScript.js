// common input and output example

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin
});

var lines = []// store all the input message

rl.on('line', function (line) {

    lines.push(line)

})

rl.on('close', function () {


    solve(lines)

})

function solve(lines) {

}



