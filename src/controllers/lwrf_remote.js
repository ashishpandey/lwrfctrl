var express = require('express')
  , router = express.Router()
  , light = require('./lwrf_light')
  , lights = require('../model/lights');
  
router.get('/identify', function (req, res) {
   res.json(lights);
});

router.use('/:lightId', light);

module.exports = router;
  
  