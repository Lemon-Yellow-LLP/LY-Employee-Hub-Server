const app = require("./app");
const connectDatabase = require("./config/database");
const configureSocket = require("./socket");
const os = require("os");
const networkInterfaces = os.networkInterfaces();

//For network ip address
const ip = Object.values(networkInterfaces)
  .flat()
  .find((iface) => iface.family === "IPv4" && !iface.internal)?.address;

//Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "./config/config.env" });
}

//Connecting to database
connectDatabase();

const PORT = process.env.PORT || 4000;

//Initialize server
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://${ip}:${PORT}`);
});

//Initialize socket on server
// const io = configureSocket(server);
