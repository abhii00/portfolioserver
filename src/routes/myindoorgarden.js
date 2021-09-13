const express = require('express');
const router = express.Router();

const test_garden = require('../assets/myindoorgarden/test_garden.json')

router
  .get('/', function(req, res){
    res.json(test_garden);
  })

module.exports = router;