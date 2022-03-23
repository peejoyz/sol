const express = require('express');
const router = express.Router();
const fs = require('fs');


module.exports = {
    CareerPage: (req, res) => {
        let message = '';
        res.render('career.ejs', {
            message,
            title: "Welcome"

        });
    },
   
};