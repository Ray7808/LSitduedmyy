
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
    let n = Number(lines[0])
    for (let i = 1; i <= n; i++) {
        let tmp = (lines[i].split(' '))
        // console.log(tmp)
        let A = BigInt(tmp[0])
        let B = BigInt(tmp[1])
        let K = Number(tmp[2])
        console.log(check(A, B, K))
    }

}

function check(A, B, K) {
    if (K === 1) {
        if (A > B) {
            return "A"
        }
        else if (B > A) {
            return "B"
        }
        else {
            return "DRAW"
        }

    }
    else if (K === -1) {
        if (A < B) {
            return "A"
        }
        else if (B < A) {
            return "B"
        }
        else {
            return "DRAW"
        }
    }

}





