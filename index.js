var express = require('express');
var app = express();

var path = __dirname + '';

const PORT = process.env.PORT || 8080;

app.use(express.static(path));
app.get('*', function(req, res) {
    res.sendFile(path + '/index.html');
}).listen(PORT, () => {
  console.log('Server running at http://localhost:' + PORT + '/');
});