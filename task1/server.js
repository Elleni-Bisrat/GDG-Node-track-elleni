console.log("Node.js is running");
/*
Part 1: Basic HTTP Server
Create a Node.js server running on port 3000 with the following routes:
- GET / → Respond with: “Welcome to the Home Page”
- GET /info → Respond with: “This is the information page”
- POST /submit → Accept JSON data from the request body and return the
exact same JSON as the response.*/ 


const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.method === "GET" && req.url ==="/"){
        res.end("Welcome to the Home Page");
    }
    else if(req.method ==="GET" && req.url ==="/info"){
        res.end("This is the information page");
    }
    else if(req.method === "POST" && req.url === "/submit"){
        let body = "";
        req.on("data", chunk =>{
            body += chunk;
        });
        req.on("end", ()=>{
            const jsonData = JSON.parse(body);
            res.end(JSON.stringify(jsonData));
        })
    }
});

server.listen(3000, ()=>{
    console.log("server running on port 3000");
})