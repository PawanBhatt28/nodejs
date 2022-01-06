const {readFile, writeFile} = require('fs');


readFile("./02/content/first.txt", 'utf-8', (err,result)=>{
    if(err){
        console.log(err);
    }
    const theData = result;
    console.log(theData);
})