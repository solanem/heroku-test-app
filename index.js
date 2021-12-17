const express = require("express");
const path = require('path');
const app = express();

let port = process.env.PORT || 3000;

app.get("/", (req, res)=> {
    res.sendFile(path.join(__dirname,"index.html"));
})

app.get("/map.html", (req, res)=> {
    res.sendFile(path.join(__dirname,"map.html"));
})

app.get("/countries.html", (req, res)=> {
    res.sendFile(path.join(__dirname,"countries.html"));
})

app.get("/createJourney.html", (req, res)=> {
    res.sendFile(path.join(__dirname,"createJourney.html"));
})

app.get("/editJourney.html", (req, res)=> {
    res.sendFile(path.join(__dirname,"editJourney.html"));
})

app.get("/stylesheet.css", (req, res)=> {
    res.sendFile(path.join(__dirname,"stylesheet.css"));
})

app.listen(port, ()=>{
    const bla = 5;
    console.log(`Example app is listening on port http://localhost:${port}`);
})