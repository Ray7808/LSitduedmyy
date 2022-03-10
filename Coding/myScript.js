
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
    //console.log(final)

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