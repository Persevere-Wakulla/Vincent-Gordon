const express = require('express')
const app = express()
const ports = 3000

app.get('/',(req,res) => {
    res.send('Hello World!')
})

app.listen(ports, () => {
    console.log(`Listening on port ${ports}`);
    
})

// Load HTTP module
const http = require("http")

const hostname = "127.0.0.1"
const port = 8000

//  Create Http Server
const server = http.createServer(function (req,res) {
    // Set the response http header with http status and content type
    res.writeHead(200, {"Content-Type": "text/plain"})

    // nSend the response body hello world
    res.end("Hello world\n")
})

// Prints a log once the server starts listening

server.listen(port,hostname,function(){
    console.log(`Server running at http://${hostname}:${port}`);
    
})