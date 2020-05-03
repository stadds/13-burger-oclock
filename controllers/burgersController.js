const express = require("express");

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

router.get("/", async function (req, res) {
    try {
        const hbsObject = {};
        hbsObject.burgers = await burger.selectAll();

        console.log(hbsObject);
        res.render("index", hbsObject);

    } catch (error) {
        throw error;
    }

});

router.post("api/burgers", async function (req, res) {

    try {

        let result = await burger.insertOne({ burger_name: req.body.name });

        res.json({ id: result.insertId });

    } catch (error) {
        throw error;
    }

});

module.exports = router;