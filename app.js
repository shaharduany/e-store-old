const connectDB = require('./config/mongoDB');
const Server = require('./scripts/server').Server;

const server = new Server();
server.listen();

connectDB();