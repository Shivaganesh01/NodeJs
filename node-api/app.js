const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const expressServer = express();
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 3000;
const messageRouter = require('./routes/messageRouter');

// // Mongo DB Connection
// const mongoose = require("mongoose");
// const mongo_uri = require("mongodb-uri");
// let dbUser = process.env.DB_USER;
// let dbPassword = process.env.DB_PASSWORD;
// const uri = `mongodb://${dbUser}:${dbPassword}@db:27017/${process.env.DB_NAME}`;
// const mongooseConnectionString = mongo_uri.formatMongoose(uri);
// mongoose.connect(mongooseConnectionString, { useNewUrlParser: true }); //Add useUnifiedTopology: true To use the new Server Discover and Monitoring engine
// let dbConnection = mongoose.connection;
// dbConnection.on('error', err => console.log(`DB connection error: ${err}`));
// dbConnection.on('open', () => {
//     console.log("Successfully connected to MongoDB")
// });

// My Own Middleware
const myOwnMiddleware = (req, res, next) => {
    console.log("My Own Middleware applied...")
    next();
};
expressServer.use(myOwnMiddleware);

// morgan:- a middleware which provides API meta info
expressServer.use(morgan("dev"));
expressServer.use(bodyParser.json());
expressServer.use(expressValidator());

expressServer.use("/message", messageRouter);

/**without controller and handling everything in router app**
expressServer.get("/", getData);
**/

expressServer.listen(port, () => {
    console.log(`Node app running on port: ${port}`)
});