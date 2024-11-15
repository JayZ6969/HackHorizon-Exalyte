const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

// Middleware for authentication
const auth = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) return res.status(401).json({ error: 'Access Denied' });
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        console.error('Invalid token:', err);
        res.status(400).json({ error: 'Invalid Token' });
    }
}

module.exports = auth;