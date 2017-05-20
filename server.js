import Express from 'express';
import { Server } from 'http';

const app = new Express();
const server = new Server(app);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});
