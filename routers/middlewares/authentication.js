const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.SECRETKEY;

const authentication = (req, res, next) => {
  // console.log(req.headers, "auth");
  try {
    if (!req.headers.authorization) {
      return res.status(403).json({ message: "forbidden" });
    } else {
      const token = req.headers.authorization.split(" ")[1];
      const parsedToken = jwt.verify(token, secret);
      req.addedToken = parsedToken;
      // console.log(req.addedToken);
      // console.log(req.headers.authorization.split(" ")[1]);
      next();
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = authentication;
