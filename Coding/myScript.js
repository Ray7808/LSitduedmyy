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
    //Obtain all the input message
    // You can use here to solve your questions

    var OAO = Number(lines[0])
    if (OAO >= Number(lines[1])) {
        OAO = Number(lines[1])
    }
    var Total = [Number(lines[1])]
    var Final = 0

    for (var i = 2; i < lines.length; i++) {
        Total[i - 2] = Number(lines[i])
    }
    // console.log(Total)

    //Bubble sort
    for (var k = 0; k < Total.length; k++) {
        for (var j = 0; j < Total.length; j++) {
            if (Total[j] > Total[j + 1]) {
                var temp = Total[j]
                Total[j] = Total[j + 1]
                Total[j + 1] = temp
            }
        }
    }
    // console.log(Total)


    for (var l = Total.length; l > (Total.length - OAO); l--) {
        // console.log('Now the Final = ', Final)
        Final += Total[l - 1]
    }
    // console.log('Now the Final = ', Final)

    console.log(Final)

}



