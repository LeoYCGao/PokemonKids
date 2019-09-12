const compression = require('compression');
const http = require('http');
const express = require('express');

const app = express();
app.use(compression());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Access-Token, Authorization");
  next();
});

app.set('port', (process.env.PORT || 18080));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('/', express.static(__dirname + '/www'));

var server = http.createServer(app);
server.listen(app.get('port'), ()=>{
    console.log('Node app is running on port', app.get('port'));
});

