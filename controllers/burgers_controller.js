//    * Express
const express = require('express');
const router = express.Router();

//    * `burger.js`
const burger = require('../models/burger');

// Create the `router` for the app, and export the `router` at the end of your file.

//  "/" uses burger.selectAll()
router.get("/", (req, res) => {
    burger.selectAll((data) => {
        const handlebarsObject = {
            burgers: data
        };
        console.log(handlebarsObject);
        res.render("index", handlebarsObject);
    });
});

// "/api/new" uses burger.insertOne()
router.post("/api/new", (req, res) => {
    burger.insertOne("burger", "burger_name", "devoured", req.body.burgerName, req.body.devoured, (result) => {
        res.json(result);
    });
});

// "/api/update/:id" uses burger.updateOne()
router.put("/api/update/:id", (req, res) => {
    burger.updateOne("burger", "burger_name", "devoured", req.body.burgerName, req.body.devoured, (result) => {
        res.json(result);
    });
});