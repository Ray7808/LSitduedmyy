//Later u can try this game

const Base_URL = 'https://lidemy-http-challenge.herokuapp.com/lv10?token={duZDsG3tvoA}'
const request = require('request')
// const process = require('process')
// console.log(process.argv)

/*
網址：https://lidemy-http-challenge.herokuapp.com/lv10?token={duZDsG3tvoA}
https://web.postman.co/workspace/My-Workspace~e6e9687a-af66-40fe-8f2b-dc42d05b1845/request/create?requestId=74d1c63e-7ca2-4bef-8d25-02cba8ca54ab
https://github.com/debbygigigi/notes/issues/24
https://web.postman.co/workspace/My-Workspace~e6e9687a-af66-40fe-8f2b-dc42d05b1845/request/create?requestId=74d1c63e-7ca2-4bef-8d25-02cba8ca54ab
*/
request(
    {
        url: Base_URL + '&num=9613',
        headers: {
            'Authorization': 'Basic YWRtaW46YWRtaW4xMjM='

        },
    },


    function (error, response, body) {
        //console.log(response.statusCode)
        console.log(body)
        // const json = JSON.parse(body)
        // console.log(json)
    }
)