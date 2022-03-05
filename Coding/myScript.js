// common input and output example

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin
});

var lines = [] // store all the input message

rl.on('line', function(line) {

    lines.push(line)
})

rl.on('close', function() {

    solve(lines)

})

function solve(lines) {
    let Oldn = lines[0].split('-')
    let arr = []
    for (let i = 0; i < Oldn.length; i++) {
        let tmp0 = Oldn[i].split('')
        console.log(tmp0)
        for (let j = 0; j < tmp0.length; j++) {
            arr.push(tmp0[j])
        }
    }
    console.log(arr)
        /*
        let sum1 = 0
        for (let i = 0; i < n.length; i += 2) {
            let tmp = Number(n[i]) * 2
            if (tmp >= 10) {
                tmp -= 9
            }
            sum1 += tmp

        }
        for (let i = 1; i < n.length; i += 2) {

        }
         */
}