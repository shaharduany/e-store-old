const config = require('config');
const key = config.get('secret');

module.exports = {
    secret: key,
    oneDay: 86400,
    sessionSetting: {
        secret: this.secret,
        saveUninitialized: true,
        cookie: { maxAge: this.oneDay, httpOnly: true },
        resave: false,
    },
};