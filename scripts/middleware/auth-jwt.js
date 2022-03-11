const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth-config");

const verifyToken = async(req, res, next) => {
    let token = req.headers["x-access-token"];

    if(!token){
        res.status(404).send({message: "Token not found"});
        return;
    }

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) {
          return res.status(401).send({ message: "Unauthorized!" });
        }
        req.userId = decoded.id;
        next();
    });
}

const isUser = async(req, res, next) => {
    const email = req.body.email;
    //you may need it later
}

module.exports.authJwt = {
    verifyToken,
}
