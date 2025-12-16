// Imported Fs,http,url Modules.
const fs = require("fs");
const http = require("http");
const url = require("url");

// Created A Server Using Http Module.
const MyServer = http.createServer((req,res)=>{
 const MyUrl = url.parse(req.url,true);
 const PathName = MyUrl.pathname;
 const username = MyUrl.query.username;

 // Route
 if(PathName === "/"){
   res.end("Welcome To Home Page!!..");
 }else if(PathName === "/profile"){
  res.end(`Welcome ${username} To Your Profile Page!!..`);
 }else if(PathName === "/dashbord"){
  res.end(`Welcome ${username} To Your Dashbord Page!!..`);
 }else if(PathName === "/logout"){
  res.end(`${username} Successfully Logout!!..`);
 }else{
   res.end("Error : 404 Page Not Found");
 }
})
MyServer.listen(8000,()=>{
 console.log("🔒 Secure Profile Server Started on Port 3000");
})