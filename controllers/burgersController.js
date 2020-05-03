const express = require("express");

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

router.get("/",function(res,req){
    const hbsObject = {};
    hbsObject.burgers = await burger.selectAll();

    console.log(hbsObject);
    res.render("index",hbsObject);
});

module.exports = router;