//console.log("Hello From Node JS!!..")
const fs = require("fs");
setTimeout(() => console.log("Hello From Timer One!!.."));
setImmediate(()=> console.log("Hello From Immediate Function one!!.."))
console.log("Top Level Code Will Be executed!!..")