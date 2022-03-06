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
        let arr0 = [1][2] = [x1, y1]
        total.push(arr0)
        //console.log(arr0)
        //let distance = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2))
        //console.log(distance.toFixed(2))
    }
    //console.log(total)

    let Final = new Array()
    for (let i = 0; i < test; i++) {
        Final[i] = new Array()
        for (let j = 0; j < test; j++) {
            Final[i][j] = 0
        }
    }
    //console.log(Final)

    for (let i = 0; i < test; i++) {
        for (let j = 0; j < test; j++) {
            let tmpx1 = total[i][0]
            let tmpy1 = total[i][1]
            let tmpx2 = total[j][0]
            let tmpy2 = total[j][1]

            let distance = Math.sqrt((tmpx1 - tmpx2) * (tmpx1 - tmpx2) + (tmpy1 - tmpy2) * (tmpy1 - tmpy2))
            Final[i][j] = distance
        }
    }
    //console.log(Final)

    let tmp5 = Infinity
    let tmpi = 0
    let tmpj = 0
    for (let i = 0; i < test; i++) {
        for (let j = i + 1; j < test - 1; j++) {
            if (tmp5 >= Final[i][j]) {
                tmp5 = Final[i][j]
                tmpi = i
                tmpj = j
            }
            //console.log('tmpi is ', tmpi, ', and tmpj is ', tmpj)
            //console.log('tmp5 is ', tmp5)

        }
    }

    //console.log('i is ', tmpi, ', and j is ', tmpj)

    let finalx1 = total[tmpi][0]
    let finaly1 = total[tmpi][1]
    let finalx2 = total[tmpj][0]
    let finaly2 = total[tmpj][1]
    if (finalx1 < finalx2) {
        console.log(finalx1 + ' ' + finaly1)
        console.log(finalx2 + ' ' + finaly2)
    }
    else if (finalx1 > finalx2) {

        console.log(finalx2 + ' ' + finaly2)
        console.log(finalx1 + ' ' + finaly1)

    }
    else if (finaly1 < finaly2) {
        console.log(finalx1 + ' ' + finaly1)
        console.log(finalx2 + ' ' + finaly2)
    }
    else {
        console.log(finalx2 + ' ' + finaly2)
        console.log(finalx1 + ' ' + finaly1)
    }

}