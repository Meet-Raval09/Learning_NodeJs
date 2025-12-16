const express = require("express")
const MyApp = express();
const fs = require("fs")
const users = require("./MOCK_DATA.json");
let Port = 8000;

// MiddleWare - Plugin.
MyApp.use(express.urlencoded({ extended:true }));

MyApp.get("/users",(req,res)=>{
   const html = `
    <h1>User List</h1>
    <ul>
      ${
        users.map(user => `
          <li>
            <b>ID:</b> ${user.id} <br/>
            <b>Name:</b> ${user.first_name} ${user.last_name} <br/>
            <b>Email:</b> ${user.email} <br/>
            <b>Gender:</b> ${user.gender} <br/>
            <b>Job:</b> ${user.job_title}
          </li>
          <hr/>
        `).join("")
      }
    </ul>
  `;
 res.send(html);
})
MyApp.route("/api/users/:id")
.get((req,res)=>{
 const id  = Number(req.params.id);
 const user = users.find((user)=>user.id === id)
 return res.json(user);
})
.patch((req,res)=>{
  // TODO : Edit A User.
 return res.json({status:"For Now Its Pending!!.."})
})
.delete((req,res)=>{
});
MyApp.post("/api/users",(req,res)=>{
// console.log("HEADERS:", req.headers["content-type"]);
 //TODO: Create A New User
 const body = req.body;
 users.push({...body,id: users.length + 1});
 fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
 return res.json({status:"Sucess",id:users.length + 1});
 })
})
MyApp.listen(Port,()=>{console.log("Server Has Been Started!!..")})