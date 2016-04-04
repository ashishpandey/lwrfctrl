var express = require('express')
  , router = express.Router();
  
router.get('/ping', function (req, res) {
   res.json({ ping: 'pong'});
});

module.exports = router;
  
  