var express = require('express'),
    http = require('http'),
    path = require('path'),
    sysapi = require('./routes/system'),
    lwrf_remote = require('./routes/lwrf_remote'),
    app = express();
    
app.use('/api', sysapi);
app.use('/api/light', lwrf_remote);

var dist = path.join(__dirname, '..', 'dist');
console.log('dist is at ' + dist);
app.use(express.static(dist));

const IP   = process.env.IP || 'localhost';
const PORT = process.env.PORT || 8080;
console.log('starting app at ' + IP + ':' + PORT);
http.createServer(app).listen(PORT, IP);
