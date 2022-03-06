// common input and output example

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin
});

var lines = [] // store all the input message

rl.on('line', function (line) {

    lines.push(line)
})

rl.on('close', function () {

    solve(lines)

})

function solve(lines) {
    let test = Number(lines[0])
    let total = []
    for (let i = 1; i <= test; i++) {
        //console.log('Now i is ', i)
        let tmp = lines[i].split(' ')
        let x1 = Number(tmp[0])
        let y1 = Number(tmp[1])
        let arr0 = [1][2] = { x1, y1 }
        total.push(arr0)
        //console.log(arr0)
        //let distance = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2))
        //console.log(distance.toFixed(2))
    }
    console.log(total)
}