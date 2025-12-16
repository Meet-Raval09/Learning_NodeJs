// Importing Http Package.
const http = require("http");
const fs = require("fs");

// CreateServer() = this function is used to create a server in node.js.
// It Has Two Args one for request and second for responce.
const MyServer = http.createServer((req,res)=>{
 console.log(req.headers);
 const MyLog = `${Date.now()}: New Request Was Recived.\n`;
 fs.appendFileSync("MyLog.txt",MyLog,(err,data)=>{
  switch(req.url){
   case "/":
    res.end("This Is A Home Page!!.");
    break;
   case "/about":
    res.end("This Is A About As Page!!..");
    break;
   case "/contact":
    res.end("This Is A Contact Page!!..");
    break;
   default:
    res.end("Error : 404 Not Found Any Given Route!!..")
  }
 })

})
//listing our server on port 8000;
MyServer.listen(8000,()=>{
 console.log("The Server Was Started!!..")
});