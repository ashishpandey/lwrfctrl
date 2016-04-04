var express = require('express'),
    http = require('http'),
    path = require('path'),
    sysapi = require('./controllers/system'),
    lwrf_remote = require('./controllers/lwrf_remote'),
    app = express();
    
app.use('/api', sysapi);
app.use('/api/light', lwrf_remote);

var dist = path.join(__dirname, '..', 'dist');
console.log('dist is at ' + dist);
app.use(express.static(dist));

http.createServer(app).listen(process.env.PORT, process.env.IP);