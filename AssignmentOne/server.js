const express = require('express');
const cors = require('cors');
const http = require('http');
const configureSocket = require('./socket');

const app = express();
app.use(cors());

const server = http.createServer(app);

// socket configuration
configureSocket(server);

app.use(express.json());


server.listen(3000, () => {
  console.log('Server is up on port 3000.');
});
