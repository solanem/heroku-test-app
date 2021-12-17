const express = require("express");
const path = require('path');
const app = express();
const importData = require("./data.json");
let port = process.env.PORT || 3000;

app.get("/", (req, res)=> {
    res.sendFile(path.join(__dirname,"index.html"));
})

app.get("/players", (req, res) =>{
    res.send(importData);
})

app.listen(port, ()=>{
    const bla = 5;
    console.log(`Example app is listening on port http://localhost:${port}`);
})