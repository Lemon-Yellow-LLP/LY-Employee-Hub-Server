const socketIO = require("socket.io");

const configureSocket = (server) => {
  const io = socketIO(server, {
    cors: {
      origin: "*", // Replace with your React app's URL
      methods: ["GET", "POST"],
    },
  });

  io.on("connect", (socket) => {
    console.log("A user connected");
    socket.emit("connected", socket.id);

    socket.on("hello", () => {
      socket.broadcast.emit("hello-success", `New Joined: ${socket.id}`);
    });

    // Handle other socket events here

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });

  return io;
};

module.exports = configureSocket;
