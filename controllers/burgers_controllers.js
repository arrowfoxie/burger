// dependencies
var express = require('express');

var router = express.Router();

// connects to burger.js model
var burger = require("../models/burgers.js");

// get function for getting all burgers
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

// post function for adding a burger
router.post("/", function (req, res) {
    burger.insertOne(req.body.burger_name, function () {
        res.redirect("/");
    });
});

// put function for updating burger devoured status
router.put("/:id", function (req, res) {
    var id = req.params.id;
    burger.updateOne(id, function () {
        res.redirect("/");
    });
});

module.exports = router;
