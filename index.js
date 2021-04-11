var express = require('express');
var app = express();

var path = __dirname + '';

app.use(express.static(path));
app.get('*', function(req, res) {
    res.sendFile(path + '/index.html');
}).listen(process.env.PORT);