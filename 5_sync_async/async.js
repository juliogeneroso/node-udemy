const fs = require('fs')

console.log("Start")

fs.writeFile('archive.txt','Hello World Async', (err)=> {
    setTimeout(()=>{
        console.log("Completed!")
    },1000)
})

console.log("End")


//Start 
// End
// Completed