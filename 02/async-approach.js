const {readFile, writeFile} = require('fs');
const path = require('path');

readFile("./content/first.txt",'utf-8',(err, result) => {
    if(err){
        console.log("First file error.")
        console.log(err)
        return err;
    }
    const firstFile = result;
    readFile(path.join(__dirname,"content","subfolder","test2.txt"),'utf-8', (err,result) => {
        console.log(path.join(__dirname,"content","subfolder","test2.txt"));
        if(err){
            console.log("Second file error!")
            console.log(err);
            return err;
        }
        const secondFile = result;
        writeFile("./content/subfolder/asyc-write.txt",`d0 d0 : ${firstFile}, dA dA : ${secondFile}`,(err,result) => {
            if(err){
                console.log(err);
                return err;
            }
            console.log(result);
            return result;
        })
    })
})