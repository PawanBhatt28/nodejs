
const http = require('http');

console.log("Server started...")

const myServer = http.createServer((request, response) => {
    console.log(request.url);
    if(request.url === "/"){
        response.end("<h1> HOME </h1> \
        Welcome to the Home page Homie!!");
    }else if(request.url === "/about"){
        response.end("This is Aboutpage.");
    }else if(request.url === "/contact"){
        response.end("Homie, my number is 911");
    }else{
        response.end(`<h1> Oops!! </h1> <p> Page doesn't exist.</p> <a href="/"> Back Home</a> `)
    };
}) 


myServer.listen(6969);