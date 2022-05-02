//Import module
// let myModule = require('./myModule.js');


//*Method 1 import function double
// console.log(utlis.myModule) // output : Function: double
// console.log(myModule(2)) // output : 4

//*Method 2 import a array
// console.log(myModule)

//*Method 3 import an object
// * You can use the value, function inside the object
// console.log(myModule.double(2), myModule.triple(3))

////////////////////////////////////
//*Only import some part of myModule
// console.log(myModule)
// console.log(myModule.double(2))

// ES6
import { double } from './myModule.js'
console.log(double(1))