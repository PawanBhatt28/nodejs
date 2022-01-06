const os = require('os');

//info about current user
const user = os.userInfo();

// system uptime in seconds
const uptime = os.uptime();
console.log(`System Uptime : ${uptime}`);

//current OS
const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
    uptime
}
console.log(currentOS);

//