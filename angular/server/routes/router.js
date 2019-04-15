const express = require('express');
const router = express.Router();
var db = require('../server-property/db');

//Router
router.get('/',(req,res)=>{
    res.send('it works')
});

module.exports = router;