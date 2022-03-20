// 引入套件
const https = require('https')
const process = require('process')

function list() {
    const options = {
        hostname: 'lidemy-book-store.herokuapp.com',
        port: 443,
        path: '/books?_limit=20',
        method: 'GET'
    }

    const req = https.request(options, (res) => {
        res.on('data', (d) => {
            let books
            try {
                books = JSON.parse(d)
            } catch (err) {
                console.log(err)
                return
            }
            for (let i = 0; i < books.length; i++) {
                console.log(`${books[i].id} ${books[i].name}`)
            }
        })
    })

    req.on('error', (e) => {
        console.error(e)
    })
    req.end()
}

function getBook(id) {
    const options = {
        hostname: 'lidemy-book-store.herokuapp.com',
        port: 443,
        path: `/books/${id}`,
        method: 'GET'
    }

    const req = https.request(options, (res) => {
        res.on('data', (d) => {
            let book
            try {
                book = JSON.parse(d)
            } catch (err) {
                console.log(err)
                return
            }
            console.log(`${id} ${book.name}`)
        })
    })

    req.on('error', (e) => {
        console.error(e)
    })
    req.end()
}

function delBook(id) {
    const options = {
        hostname: 'lidemy-book-store.herokuapp.com',
        port: 443,
        path: `/books/${id}`,
        method: 'DELETE'
    }

    const req = https.request(options, (res) => {
        res.on('data', (d) => {
            console.log('delete successfully')
        })
    })

    req.on('error', (e) => {
        console.error(e)
    })
    req.end()
}

function addBook(name) {
    const data = JSON.stringify({
        name
    })
    const options = {
        hostname: 'lidemy-book-store.herokuapp.com',
        port: 443,
        path: '/books',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    }
    const req = https.request(options, (res) => {
        res.on('data', (d) => {
            console.log('add successfully')
        })
    })

    req.on('error', (error) => {
        console.error(error)
    })

    req.write(data)
    req.end()
}

function updateBook(id, name) {
    const data = JSON.stringify({
        name
    })
    const options = {
        hostname: 'lidemy-book-store.herokuapp.com',
        port: 443,
        path: `/books/${id}`,
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    }
    const req = https.request(options, (res) => {
        res.on('data', (d) => {
            console.log('update successfully')
        })
    })

    req.on('error', (error) => {
        console.error(error)
    })

    req.write(data)
    req.end()
}

// 主程式
function main() {
    if (process.argv[2] === 'list') {
        list()
    } else if (process.argv[2] === 'read') {
        getBook(process.argv[3])
    } else if (process.argv[2] === 'delete') {
        delBook(process.argv[3])
    } else if (process.argv[2] === 'create') {
        addBook(process.argv[3])
    } else if (process.argv[2] === 'update') {
        updateBook(process.argv[3], process.argv[4])
    }
}

main()