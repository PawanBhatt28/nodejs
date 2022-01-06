// synchronous -- reading file one line by line and not going to next
//                till current task is completed.


console.log("Starting extracting modules.")
const {readFileSync, writeFileSync} = require("fs");
console.log("Done extracting modules.")

console.log("Starting writing to the file.");

const myself = "Hello, my name is giovano georgio, but everyone calls me georgio.";
writeFileSync("./content/sync-write.txt",myself);
console.log("Done writing!");

console.log("Starting reading the file.");

const syncRead = readFileSync("./content/sync-write.txt", 'utf-8');
 
console.log(`Read Data : ${syncRead}`);
console.log("Done reading!");


        
