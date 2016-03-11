var express = require('express'),
    http = require('http'),
    path = require('path'),
    app = express();

var dist = path.join(__dirname, '..', 'dist');
console.log('dist is at ' + dist);
app.use(express.static(dist));

http.createServer(app).listen(process.env.PORT, process.env.IP);