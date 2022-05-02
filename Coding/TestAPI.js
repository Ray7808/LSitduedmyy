const request = require('request')

//We want to use terminal to decide which user we want to obtain
const process = require('process')
// console.log(process.argv)

//Obtain user's information
// request(
//     //Method 1 : Obtain user's information
//     // 'https://reqres.in/api/users',

//     //Method 2 : Obtain user 5's information
//     // 'https://reqres.in/api/users/5',

//     //Method 3 : Obtain user's information due to terminal input
//     //Example : node TestAPI.js <number>
//     'https://reqres.in/api/users/' + process.argv[2],

//     function (error, response, body) {
//         console.log(body)
//     }
// )

//Upload information and show the uploaded information
//This function can be found on request github
request.post(

    'https://reqres.in/api/users',
    {
        form: {
            "name": 'Haha',
            "job": 'none'
        }
    },
    function (error, response, body) {
        //Method 1 : Obtain JSON type string
        // console.log(body)

        //Method 2 : Convert string to JSON type
        //And then you can use different subtitle to do
        const json = JSON.parse(body)
        console.log(json)
        console.log(json.name)
    }
)

const obj = {
    name: 'Haha',
    job: 'none'
}

console.log(obj)
//Convert JSON type to string
console.log(JSON.stringify(obj))