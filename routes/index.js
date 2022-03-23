var express = require('express');
var router = express.Router();
const fs = require('fs');

router.get('/', function (req, res) {
    res.render('pages/index', {
        title: "HOME"
    });
});

router.get('/commercial', function (req, res) {
    res.render('pages/commercial', {
        title: "COMMERCIAL PURPOSE"
    });
});

router.get('/residence', function (req, res) {
    res.render('pages/residence', {
        title: "RESIDENCE"
    });
});

router.get('/utility', function (req, res) {
    res.render('pages/utility', {
        title: "UTILITY"
    });
});

router.get('/contact', function (req, res, next) {
    res.render('pages/contact', {
        title: "Contact"
    });
});

router.post('/contact', function (req, res, next) {
});



router.get('/plants', function (req, res) {
    res.render('pages/plants', {
        title: "PLANTATIONS"
    });
});

router.get('/message', function (req, res) {
    res.render('you', {
        title: "",
    });
});

router.get('/about', function (req, res) {
    res.render('pages/about', {
        title: "ABOUT US "
    });
});

router.get('/policy', function (req, res) {
    res.render('pages/policy', {
        title: "PRIVACY POLICY - solplant"
    });
});

module.exports = router;