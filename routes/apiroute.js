const router = require('express').Router();
const fs = require('fs');
const db = require("../db/db.json");



router.get('/notes', (req,res) => {
    fs.readFile("db/db.json","UTF-8", (err,data) => {
        return err ? console.log(err) : res.json(JSON.parse(data))
    })
});
router.post('/notes', (req,res) => {
    fs.readFile("db/db.json","UTF-8", (err,data) => {
        if(err) throw err;
        let json = JSON.parse(data);
        let knot = {
            title: req.body.title,
            text: req.body.text,
            id: db.length + 1
        }
        json.push(knot)
        fs.writeFile("db/db.json",JSON.stringify(json),(err,data) => {
            if(err) throw err;
            res.end(data);
        })
    })
});
router.delete('/notes/:id', (req,res) => {
    fs.readFile("db/db.json","UTF-8", (err,data) => {
        if(err) throw err;
        let json = JSON.parse(data);
        let knot = json.filter(knot => knot.id != req.params.id);
        fs.writeFile("db/db.json",JSON.stringify(knot),(err,data) => {
            if(err) throw err;
            res.end(data);
        })
    })
});

module.exports = router;