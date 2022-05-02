const request = require('request')
// const process = require('process')
request(
    'https://lidemy-book-store.herokuapp.com/books?_limit=10',

    function (error, response, body) {
        //Convert to JSON type
        const json = JSON.parse(body)
        //console.log(json)

        for (let i = 0; i < 10; i++) {
            console.log(`${json[i].id} ${json[i].name}`)
        }
    }

)