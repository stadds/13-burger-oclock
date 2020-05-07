const express = require("express");

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

router.get("/", async function (req, res) {
    try {
        const hbsObject = {};
        hbsObject.burgers = await burger.selectAll().catch( e => { console.error(e) } );

        console.log(hbsObject);
        res.render("index", hbsObject);

    } catch (error) {
        throw error;
    }

});

router.post("/api/burgers", async function (req, res) {

    try {

        // console.log("in post");

        let result = await burger.insertOne({ burger_name: req.body.name }).catch( e => { console.error(e) } );

        res.json({ id: result.insertId });

    } catch (error) {
        throw error;
    }

});

router.put("/api/burgers/:id",async function(req,res){
    try {

        // console.log("in put");
        let newDevour = false;
       
        if(req.body.devoured === "true"){
            newDevour = true;
        }
        else{
            newDevour = false;
        }

        console.log(newDevour);
                
        let result = await burger.updateOne({devoured: newDevour},req.params.id).catch( e => { console.error(e) } );

        if(result.changedRows === 0){
            return res.status(404).end();
        } else{
            res.status(200).end();
        }
        
    } catch (error) {
        throw error;
    }


});

module.exports = router;