const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  try {
    // Get Authorization header
    const authHeader = req.headers.authorization;

    // No token
    if (!authHeader) {
      return res.status(401).json({
        message: "No token provided",
      });
    }

    // "Bearer JWT"
    const token = authHeader.split(" ")[1];

    // Verify JWT
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // Store decoded information in request
    req.user = decoded;

    // Continue to route
    next();

  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};

module.exports = authenticate;