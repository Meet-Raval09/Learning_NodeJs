// File Handling In Node Js.
const fs = require("fs");

// Writing A File.
//fs.writeFile("./test_one.txt","Hello From Node!! Asyncronous",(err)=>{
// console.log("We Got Some Error : " ,err)
//});
//fs.writeFileSync("./test_two.txt","Hello From Node!!.. Syncronous");

// Reading A File.
//const data = fs.readFileSync("./Contacts.txt","utf-8");
//console.log(data);

// Appending In Files.
fs.appendFileSync("./Contacts.txt","\nMukesh Bhai : +91 - 123456789");
