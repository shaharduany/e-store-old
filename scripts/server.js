const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const connectDB = require('../config/mongoDB');
const { mainGet, signin, signupUser, checkout, checkEmailExists } = require("../controller/appController");
const authConfig = require("../config/auth-config");
const verifySignUp = require("./middleware/verify-signup");
const { authJwt } = require("./middleware/auth-jwt");
const {API_PATHS} = require("../config/route-paths");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 9000; // Loaded from .env file
    
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });

    this.app.use(cors()); // Enable CORS

    this.app.use(sessions({
      secret: authConfig.secret,
      saveUninitialized: true,
      cookie: { maxAge: authConfig.oneDay, httpOnly: true },
      resave: false,
  }));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
  }

  // Bind controllers to routes
  routes() {
    this.app.post(API_PATHS.register, verifySignUp.checkDuplicatedEmail, signupUser);
    this.app.post(API_PATHS.login, signin);
    this.app.post(API_PATHS.checkout, authJwt.verifyToken, checkout)
    this.app.post(API_PATHS.checkEmail, checkEmailExists);

    this.app.get(API_PATHS.homepage, mainGet);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server running on port: ", this.port);
    });
  }
}

module.exports.Server =  Server;