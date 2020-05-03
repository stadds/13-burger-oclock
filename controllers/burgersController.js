const express = require("express");

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

router.get("/",async function(req,res){
    try {
        const hbsObject = {};
        hbsObject.burgers = await burger.selectAll();
    
        console.log(hbsObject);
        res.render("index",hbsObject);
        
    } catch (error) {
        throw error;
    }
   
});

module.exports = router;