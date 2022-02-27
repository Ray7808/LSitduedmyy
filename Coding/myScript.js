
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin
});

var lines = []

rl.on('line', function (line) {
    lines.push(line)

})

rl.on('close', function () {


    solve(lines)

})

function solve(lines) {


    var solved = []
    var i = 0

    //console.log(lines[i])


    do {
        //console.log('Now i is ', i)
        var num = lines[i]
        var num = num.split(' ')
        //console.log(Number(num[0]) + Number(num[1]))

        if (Number(num[0]) == Number(num[1]) && Number(num[0]) == 0) {
            break
        }
        else {
            solved.push(Number(num[0]) + Number(num[1]))
        }
        i++

    } while (-1)


    for (var i = 0; i < solved.length; i++) {
        console.log(solved[i])
    }



}



