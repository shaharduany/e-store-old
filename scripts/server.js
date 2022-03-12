const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const connectDB = require('../config/mongoDB');
const { mainGet, cartGet, accountGet, loginPost, registerPost, checkout } = require("../controller/appController");
const authConfig = require("../config/auth-config");
const verifySignUp = require("./middleware/verify-signup");
const { signupUser, signin } = require("./assist-functions");
const { throws } = require("assert");
const { authJwt } = require("./middleware/auth-jwt");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 9000; // Loaded from .env file
    this.paths = {
      homepage: "/api/homepage",
      cart: "/api/cart",
      account: "/api/account",
      login: "/api/login",
      register: "/api/register",
      logout: "/api/logout",
      checkout: "/api/checkout",
    };
    this.middlewares();
    this.routes();
  }çc

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
    this.app.post(this.paths.register, verifySignUp.checkDuplicatedEmail, signupUser);
    this.app.post(this.paths.login, signin);
    this.app.post(this.paths.checkout, authJwt.verifyToken, checkout)

    this.app.get(this.paths.homepage, mainGet);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server running on port: ", this.port);
    });
  }
}

module.exports.Server =  Server;