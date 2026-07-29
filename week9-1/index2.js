require('dotenv').config()
let http = require('http')

let port = process.env.PORT || 3000
let apiKey = process.env.API_KEY 
let env = process.env.NODE_ENV

let server = http.createServer((req , res)=>{
    res.writeHead(200)
    res.end(`server is running on port ${port}`)
})

server.listen(port , ()=>{
    console.log(`ENV : ${process.env.NODE_ENV}`)
})