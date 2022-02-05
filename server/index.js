const express = require('express');
const app = express();
const path = require('path');
const sqlite = require('sqlite3').verbose();

let db = new sqlite.Database('./Products.sqlite', (err) => {
    if(err) {
        console.error(err.message);
    } else {
        console.log("Connected to the Products database.");
    }
})

app.use(express.static(path.join(__dirname,'/build')));

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname,'build/index.html'));
})

app.get('/api/goods/:name', (req,res) => {
    const query = `SELECT * FROM ${req.params.name}`;
    db.all(query, (err, row) => {
        res.json({data:row});
    })
})

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'build/index.html'));
})

app.listen(5000);