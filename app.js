const http = require('http');

const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
	console.log('In another middleware!');
	res.send('<h1>The users Page</h1>');
});

app.use('/', (req, res, next) => {
	console.log('In another middleware!');
	res.send('<h1>The Main Page</h1>');
});

const server = http.createServer(app);

server.listen(3000);
