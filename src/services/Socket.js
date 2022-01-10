import { io } from 'socket.io-client';

const URL = 'http://192.168.1.57:3000';
const socket = io(URL, { autoConnect: false });

socket.onAny((event, ...args) => {
  console.log(event, args);
});

export default socket;
