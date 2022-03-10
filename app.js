const express = require('express');
const connectDB = require('./config/mongoDB');
//const { accountView, cartView, mainView } = require('./controller/appController');

const Server = require('./scripts/server').Server;
const server = new Server();
server.listen();

connectDB();
//serving public file
/*
app.use(express.static("public"));

app.get('/', mainView);

app.get('/cart', cartView);

app.post('/login', (req, res, next) => {
    //check database if user and passwords are correct
});

app.post('/register', (req, res, next) => {
    //register new user
});

app.post('/item/:id', (req, res, next) => {
    //put item in user's cart
});

app.get('/account', accountView);

app.listen(PORT, () => {
    console.log("Server is up");
});*/