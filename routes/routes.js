const express = require("express");
const router = express.Router();

router.get("/australia", async (req, res) => {
    let url = `http://universities.hipolabs.com/search?country=australia`;

    let response = await fetch(url); // use the fetch method
    let unis = await response.json(); // read response body and parse as JSON
    let country="Australia"
    
    res.render("index", {uni_data: unis, country:country});
});

router.get("/denmark", async (req, res) => {
    let url = `http://universities.hipolabs.com/search?country=denmark`;

    let response = await fetch(url); // use the fetch method
    let unis = await response.json(); // read response body and parse as JSON
    let country="Denmark"
    
    res.render("index", {uni_data: unis, country:country});
});

router.get("/France", async (req, res) => {
    let url = `http://universities.hipolabs.com/search?country=france`;

    let response = await fetch(url); // use the fetch method
    let unis = await response.json(); // read response body and parse as JSON
    let country="France"
    
    res.render("index", {uni_data: unis, country:country});
});

router.get("/usa", async (req, res) => {
    let url = `http://universities.hipolabs.com/search?country=united+states`;

    let response = await fetch(url); // use the fetch method
    let unis = await response.json(); // read response body and parse as JSON
    let country="United States"
   
    res.render("index", {uni_data: unis, country:country});
});

module.exports = router;

