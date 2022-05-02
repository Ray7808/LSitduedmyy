// common input and output example

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin
});

var lines = []// store all the input message

rl.on('line', function (line) {
    //console.log('input:', line)
    lines.push(line)

})

rl.on('close', function () {
    // click control + d
    // sent a ending signal

    solve(lines)

    //console.log('close')
})

function solve(lines) {
    //Obtain all the input message
    // You can use here to solve your questions


}



