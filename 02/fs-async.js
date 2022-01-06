const {readFile, writeFile} = require('fs');

readFile("./content/first.txt",'utf-8',
(err,result)=>{
    if(err){
        console.log(err);
        return null;
    }
    const first = result;
    readFile("./content/subfolder/test2.txt",'utf-8',
    (err,result) => {
        if(err){
            console.log(err);
            return null;
        }
        const second = result;
        writeFile("./content/result-sync.txt",
        `First : ${first},\nSecond : ${second}`,
         (err,result) => {
             if(err){
                 console.log(err);
                 return err;
             }
             console.log(result);
         });
    })
})

// console.log(data); 