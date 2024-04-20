const mongoose = require ("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// Global configuration
const mongoURI = process.env.MONGO_URI;
// console.log(mongoURI);
// const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI);

mongoose.connection
  .on('open', () => console.log('Connected to Mongoose')) // eslint-disable-line no-console
  .on('close', () => console.log('Disconnected from Mongoose')) // eslint-disable-line no-console
  .on('error', (error) => console.error(error)); // eslint-disable-line no-console


//   module.exports = db;
module.exports = mongoose;