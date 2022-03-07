// common input and output example

var readline = require('readline');
const { domainToASCII } = require('url');
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

    let n = Number(lines[0])
    let dots = []
    for (let i = 1; i < lines.length; i++) {
        let tmp = lines[i].split(' ')
        dots.push({
            x: Number(tmp[0]),
            y: Number(tmp[1])
        })
    }
    //console.log(dots)

    let min = Infinity
    let ans = null
    for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
            let dis = distance(
                dots[i].x, dots[i].y, dots[j].x, dots[j].y
            )
            if (dis < min) {
                min = dis
                ans = {
                    x1: dots[i].x,
                    y1: dots[i].y,
                    x2: dots[j].x,
                    y2: dots[j].y
                }
            }
        }
    }
    //console.log(ans)

    if (ans.x1 > ans.x2) {
        console.log(ans.x2 + ' ' + ans.y2)
        console.log(ans.x1 + ' ' + ans.y1)
    }
    else if (ans.x1 < ans.x2) {
        console.log(ans.x1 + ' ' + ans.y1)
        console.log(ans.x2 + ' ' + ans.y2)
    }
    else {
        if (ans.y1 > ans.y2) {
            console.log(ans.x2 + ' ' + ans.y2)
            console.log(ans.x1 + ' ' + ans.y1)
        }
        else {
            console.log(ans.x1 + ' ' + ans.y1)
            console.log(ans.x2 + ' ' + ans.y2)
        }
    }

    function distance(x1, y1, x2, y2) {
        let dis = Math.sqrt(
            abs(x1 - x2) * abs(x1 - x2) +
            abs(y1 - y2) * abs(y1 - y2)
        )
        return dis
    }

    function abs(n) {
        if (n < 0) {
            return -n
        }
        else {
            return n
        }
    }
}