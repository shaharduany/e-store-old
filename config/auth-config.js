module.exports = {
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    oneDay: 86400,
    sessionSetting: {
        secret: this.secret,
        saveUninitialized: true,
        cookie: { maxAge: this.oneDay, httpOnly: true },
        resave: false,
    },
};