const http = require('http');
const express = require('express');
const { Server } = require('socket.io');
const path = require('path');
// const cors = require('cors'); // Import CORS middleware -- TBD

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// TBD -- Enable CORS for requests from http://localhost:3000
// app.use(cors({ origin: 'http://localhost:3000' }));

// Serve static files
app.use(express.static(path.resolve(__dirname, '../../client/dist')));

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
