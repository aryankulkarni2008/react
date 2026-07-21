const fs = require("fs");

function fileOperation(){
    console.log("File operations started... ");
    fs.writeFile("file.txt","data write from file operation file",()=>{
        console.log("data written to file");
    })
    console.log("file operations ended....")
} 
module.exports=fileOperations;