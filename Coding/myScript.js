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

    let OAO = lines[0].split(' ')

    let n = Number(OAO[0])
    let m = Number(OAO[1])

    for (let i = n; i <= m; i++) {
        //console.log('Now i =', i)
        let tmp = []
        tmp = (i.toString()).split('')

        let tmp2 = 0
        for (let j = 0; j < tmp.length; j++) {
            tmp2 += Math.pow(Number(tmp[j]), tmp.length)
        }
        //console.log('Now tmp2 = ', tmp2)
        if (tmp2 === i) {
            console.log(i)
        }

    }
}



