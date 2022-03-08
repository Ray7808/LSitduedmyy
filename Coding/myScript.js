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
    solve(lines)
})

function solve(lines) {
    input = lines[0]
    FinalLength = Number(lines[1])
    padString = lines[2]
    let result = padEnd(input, FinalLength, padString)
    console.log(result)
}


function padEnd(str, targetLength, padString) {
    let result = str
    if (targetLength < result.length) {
        return result
    }
    else {
        for (let i = result.length - 1; i < targetLength; i++) {

        }
    }

}

/*
// LIOJ 1045：String slice
function slice(str, beginIndex, endIndex) {

}
*/


/*
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
    solve(lines)
})
function solve(lines) {
    arr = filter(lines, remove)
}
function filter(arr, callback) {
    let n = Number(arr[0])
    let total = Number(arr[1])
    let result = []
    let kk = 0
    for (let i = 0; i < total; i++) {
        let tmp = callback(arr[i + 2], n)
        if (tmp === true) {
            continue
        }
        else {
            result[kk] = arr[i + 2]
            kk++
        }
    }
    for (let j = 0; j < result.length; j++) {
        console.log(result[j])
    }
}

function remove(arr, n) {
    if (Number(arr[0]) === n) {
        return true
    }
    else {
        return false
    }
}

*/
/*
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
    solve(lines)
})
function solve(lines) {

    let input = lines[0]
    let output = trim(input)
    console.log(output)
}
function trim(str) {
    let result = ''
    let initial = 0
    let final = 0
    console.log(final)

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            initial = i
            break
        }
    }
    for (let j = str.length - 1; j >= 0; j--) {
        if (str[j] !== ' ') {
            final = j
            break
        }
    }
    for (let k = initial; k <= final; k++) {
        result += str[k]
    }
    return result

}
*/