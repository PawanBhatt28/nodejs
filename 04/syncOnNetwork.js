const http = require('http');

console.log("Server starting...")

const server = http.createServer((request, response) => {
    if(request.url === "/" || request.url === "/home"){
        response.end("HOME PAGE.");
    }else if(request.url == "/about"){
        for(let i=0; i < 5;i++){
            for(let j=0; j < 1000;j++){
                console.log(`${i,j}`);
            }
        }
        response.end("ABOUT PAGE")
    }else{
        response.end("Ooops! Page doesn't exist.");
    }

});


server.listen(6969,()=>{
    console.log("Server is listening on port : 6969");
});

/* If there exist some blocking code in the server and if any user requsted the BLOCKING CODE(synchronus)
   and blocking code takes a lot of time to complete, so everypage on the website will not respond unless
   the blocking code is COMPLETED.
   So, because of one user, every user has to suffer the buffering(loading) and site will only work when
   the BLOCKING CODE has been EXECUTED COMPLETELY.
   That's why we always try to use ASYNCRONUS approach when building a server.*/