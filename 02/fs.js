const {readFileSync, writeFileSync} = require("fs");

const first = readFileSync("./content/first.txt","utf-8");
const second = readFileSync("./content/subfolder/test2.txt","utf-8");

console.log(first, second);
// for writing
writeFileSync("./content/result-sync.txt",`Here is the result first : ${first}, second : ${second}`,{flag:'a'});
// for appending provide third parameter {flag:'a'} --> a for appending
