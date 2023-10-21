import { io } from 'socket.io-client';
import serverURL from '../config.js';

const socket = io(serverURL);

const connectToServer = () => {
  socket.connect();
};

socket.on('connect', () => {
  console.log('Connected to the server.');
  connectToServer();
});

socket.on('connect_error', (error) => {
  console.error('Socket connection error:', error);
});

socket.on('disconnect', () => {
  console.log('Disconnected from the server.');
});

socket.on('error', (error) => {
  console.error('Socket error:', error);
});

export { socket, connectToServer };
