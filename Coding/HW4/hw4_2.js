const Base_URL = 'https://lidemy-book-store.herokuapp.com'
const request = require('request')
const process = require('process')
//console.log(process.argv)

function getBook(n) {
    request(
        `${Base_URL}/books?_limit=${n}`,

        function (error, response, body) {
            //console.log(body)
            const json = JSON.parse(body)
            for (let i = 0; i < json.length; i++) {
                console.log(`${json[i].id} ${json[i].name}`)
            }
        }
    )
}
function readBook(id) {
    request(
        `${Base_URL}/books?_limit=${id}`,

        (error, response, body) => {
            //console.log(body)
            const json = JSON.parse(body)
            const idNumber = json.length - 1
            console.log(`${json[idNumber].id} ${json[idNumber].name}`)
        }
    )

}
function deleteBook(id) {
    request.delete(
        `${Base_URL}/books/${id}`,

        (error, response, body) => {
            //console.log('body:', body)
            //console.log(response.statusCode)
        }
    )

}
function createBook(id) {
    request.post(
        {
            url: `${Base_URL}/books`,
            form: {
                name: id
            }
        },
        (error, response, body) => {
            //console.log(response.statusCode)
            //console.log(body)
        }
    )
}
function updateBook(n, name) {
    request.patch(
        {
            url: `${Base_URL}/books/${n}`,
            form: {

                "name": name
            }
        },
        (error, response, body) => {
            console.log(response.statusCode)
            console.log('body:', body)
        }
    )
}

function main() {
    switch (process.argv[2]) {
        case 'list':
            getBook(20)
            break
        case 'read':
            readBook(process.argv[3])
            break
        case 'delete':
            deleteBook(process.argv[3])
            break
        case 'create':
            createBook(process.argv[3])
            break
        case 'update':
            updateBook(process.argv[3], process.argv[4])
            break
        default:
            console.log('Command not found!')
    }
}
main()