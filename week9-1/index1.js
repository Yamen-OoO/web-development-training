// HttpModule
let http = require("http")


// let server = http.createServer((req , res)=>{
//     res.writeHead(200 , {"content-type" : 'text/plain'})
//     res.end('hello world!')
// })

// server.listen(3000 , ()=>{
//     console.log('server is running on port 3000')
// })


let server1 = http.createServer((req , res)=>{
    res.writeHead(200 , {"content-type" : 'application/json'})
    let user = {id: 1 , name:'yamne' , age:24}
    res.end(JSON.stringify(user))
})

server1.listen(3001 , ()=>{
    console.log('server is running on port 3001')
})




