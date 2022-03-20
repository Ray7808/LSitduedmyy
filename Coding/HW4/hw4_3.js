//const Base_URL = 'https://restcountries.eu/rest/v2/name/'
const request = require('request')
//const process = require('process')

request(
    'https://restcountries.com/v3.1/name/tai',
    function (error, response, body) {
        //console.log(response.statusCode)
        // console.log(body)

        let json = JSON.parse(body)
        // console.log(json)
        //console.log(json.length)
        //console.log(json[0])

        for (let i = 0; i < json.length; i++) {
            console.log('============')
            console.log('國家：', json[i].name.common)
            console.log(`首都：${json[i].capital}`)
            console.log('貨幣：', String(Object.keys(json[i].currencies)))
        }
    }
)