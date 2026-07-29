let http = require('http')

let server = http.createServer((req , res)=>{
    let {method , url} = req // res.method , req.url
    

    // Home route 
    if(url === '/' && method === "GET"){
        res.writeHead(200  , {"content-type" : 'text/html'})
        res.end('<h1>Home page</h1>')
    }
    // about route
    else if(url === '/about' && method === "GET"){
        res.writeHead(200  , {"content-type" : 'text/html'})
        res.end('<h1>About page</h1>')
    }
    // api route
    else if(url === '/api/users' && method === "GET"){
        res.writeHead(200  , {"content-type" : 'application/json'})
        let user = {name:yamen}
        res.end(JSON.stringify(user))
    }
    // not found route
    else{
        res.writeHead(404  , {"content-type" : 'text/html'})
        res.end('<h1> 404 page not found </h1>')
    }
})
server.listen(3000)





