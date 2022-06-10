const express = require("express");
const app = express();
const PORT = 3001;
// app.get("/", (req,res)=>{
//     res.send("<h1>Hello World</h1>")
// })
// app.get("/home", (req,res)=>{
//     res.send("<h1>./home extension</h1>")
// })
// app.get("/endpage", (req,res)=>{
//     res.send("<h3>The End</h3>")
// })
// app.get("*", (req,res)=>{
//     res.send("<h1>ERROR</h1>")
// })
app.listen(PORT, ()=>{
    console.log("Listening on PORT http://localhost:" + PORT);
})