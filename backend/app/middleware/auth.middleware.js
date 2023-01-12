const jwt =require("jsonwebtoken")
const dotenv=require("dotenv")

dotenv.config()
const validateToken = (req, res, next) => {
    const token =
        req.headers["access-token"] ||
        req.body.headers["access-token"] ||
        req.query.tokens;

    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
};

module.exports=validateToken;
