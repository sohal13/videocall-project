import { io } from "socket.io-client";

let socket;

const getSocket = () => {
    if (!socket) {
        socket = io("https://slrtechcalls.onrender.com")
    }
    return socket;
}

const setSocket = () => {
    socket = null;
}

export default {
    getSocket, setSocket
}