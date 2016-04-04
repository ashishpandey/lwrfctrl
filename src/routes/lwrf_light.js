var express = require('express')
  , router = express.Router({ mergeParams: true })
  , lights = require('../model/lights');
  
var findLight = function(lightId) {
    return new Promise(function(found, notFound) {
        var light = lights.find(function(x) { return x.id == lightId });
        if(light) {
            found(light);
        }
        else {
            notFound();
        }
    }); 
};

var lightNotFound = function(res) {
    return function() { res.status(404).json({status: 404, message: 'light not found'}); }
};

router.get('/', function (req, res) {
    findLight(req.params.lightId)
    .then(
        function(light) { res.json(light); },
        lightNotFound(res)
    );
});

router.get('/level/:level', function(req, res) {
    findLight(req.params.lightId)
    .then(
        function(light) { 
            res.json({ 
                level: req.params.level, 
                light: light.id,
                status: 'not yet implemented' 
                
            });
        },
        lightNotFound(res)
    );
});

module.exports = router;
  
  