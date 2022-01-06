const path = require('path');

//path separator / or \
console.log(path.sep);

//
const filePath = path.join("/Nodejs","01","test.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolutePath = path.resolve(__dirname,"Nodejs","01","test.txt");
console.log(absolutePath); // spitting out the complete absolute path to the given base file or folder;