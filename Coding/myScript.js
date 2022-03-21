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
    let n = Number(lines[0])
    let Answer = lines[1].split(' ')
    let OAO = 0
    let OAOBefore = 0
    let Final = 0
    let before = 0

    //console.log(Answer)
    for (let i = 0; i < n; i++) {
        let tmp = Number(Answer[i])
        //console.log('Now tmp is ', tmp)

        if (i === 0) {
            OAO++
        }
        else {

            if (tmp === before && i === n - 1) {
                OAO++
                if (OAO >= OAOBefore) {
                    Final = before
                    OAOBefore = OAO
                }
            }
            else if (tmp === before) {
                OAO++
            }
            else {
                if (OAO >= OAOBefore) {
                    Final = before
                    OAOBefore = OAO
                }
                OAO = 0
            }

        }
        before = tmp
        //console.log('Now final is ', Final)
    }
    console.log(Final)
}




