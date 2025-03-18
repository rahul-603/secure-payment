const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    if (!authHeader) return res.status(401).json({ message: "Access Denied" });

    console.log("Authorization Header:", authHeader); // Debug log

    const token = authHeader.split(" ")[1]; // Extract token after "Bearer"
    if (!token) return res.status(401).json({ message: "Invalid Token" });

    console.log("JWT_SECRET Used for Verification:", process.env.JWT_SECRET);

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Token Verified:", verified); // Debug log
        req.user = verified;
        next();
    } catch (err) {
        console.error("JWT Verification Error:", err.message); // Debug log
        res.status(400).json({ message: "Invalid Token" });
    }
};

module.exports = verifyToken;
