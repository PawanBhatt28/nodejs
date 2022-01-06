console.log("First");

setInterval(()=>{
    console.log(Date());
},2000);

console.log("Third");

// setInterval invokes the callback in every given second, in this case 2seconds, and will never stop inoking the callback untill there is some error we force stop it by CTRL + C
// therefore because of asynchronus property--> other tasks will be completed before the setInterval and after all taska setInterval will run.
