import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config()

const JWT_SECRET = process.env.SECRET_KEY;

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: 'Access denied, token required' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token or expired' });
    }
}

export default verifyToken