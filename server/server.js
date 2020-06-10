const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const getRecentPhotos = require('./getPhotos');

const port = process.env.PORT || 8080;

const app = express();

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
	socket.on('get images', ({ page, pageSize }) => {
		getRecentPhotos({ page, pageSize })
			.then((data) => {
				socket.emit('updateImages', data.body.photos.photo);
			})
			.catch((err) => {
				socket.emit('onError', err.message);
			});
	});
});

server.listen(port, () => console.log(`Listening on port ${port}`));
