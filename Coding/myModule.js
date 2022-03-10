//   Export all the comports
//*For other people to use

function double(n) {
    return n * 2
}

//*Method 1 export a funciton
//*export module (function double)
// module.exports = double

//*Method 2 export a array
// module.exports = [1, 2, 3]

//*Method 3 export an object
// let obj = {
//     double: double,
//     triple: function (n) {
//         return n * 3
//     }
// }
// module.exports = obj

/////////////////////////////////
//*Only export some part of myModule
exports.double = double
exports.triple = function (n) {
    return n * 3
}