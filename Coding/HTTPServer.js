var http = require('http')

var server = http.createServer(handleRequest)
function handleRequest(req, res) {
    //Method 1 : response 'hello'
    // console.log(req.url)  
    // res.write('hello')
    // res.end()

    //Method 2 : Show different page based on different address
    if (req.url === '/') {
        //When input address = 'localhost:5500'
        //It will show this one
        res.write('Welcome!')
        res.end()
        return
    }
    if (req.url === '/hello') {
        //When input address = 'localhost:5500/hello'
        //It will show this one
        res.write('Hello!')
        res.end()
        return
    }
    if (req.url === '/redirect') {
        //Here is that redirect to other address

        //Method 2.1
        //If u check the header page
        //U can see the following information
        // res.writeHead(200, {
        //     'Lidemy': 'Good'
        // })
        // res.end()
        // return

        //Method 2.2
        //Because the state code of redirect is 301 or 302
        //Here we use 302 and redirect to the hello page (or google page)
        res.writeHead(302, {
            //'Location': '/hello'
            'Location': 'https://google.com'
        })
        res.end()
        return
    }

    //If your req.url is somet other not defined address
    //It will show the 404 page (Not found information)
    res.writeHead(404)
    res.end()
}

server.listen(5500) //port