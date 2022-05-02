const request = require('request')

//Test delete function of request model
// request.delete(
//     'https://reqres.in/api/users/2',
//     function (error, response, body) {
//         console.log('body:',body)
//         console.log(response.statusCode)
//         //statusCode = 204 means no content

//         // const json = JSON.parse(body)
//         // console.log(json)
//     }
// )

//Replace the previous information using API
request.patch(
    {
        url:'https://reqres.in/api/users/2',
        form:{
            name:'hello'
        }
    },
    function (error, response, body){
        console.log(response.statusCode)
        console.log(body)
    }
)