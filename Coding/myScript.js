function sum(array) {
    var total = 0
    for (var i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total
}

console.log(sum([-1, 1, 2, -2, 3, -3]))