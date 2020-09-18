const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



  router.post('/', (req, res) => {
    // POST route code here
    console.log(req.body.imageUrl);
    
    res.sendStatus(200);
  });


  module.exports = router;