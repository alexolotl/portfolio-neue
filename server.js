var Express = require('express');

const app = new Express();

console.log('hi');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});
