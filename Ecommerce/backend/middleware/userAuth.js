import jwt from 'jsonwebtoken';

export const userAuth = async (req, res, next) => {
  try {
    let token = req.headers.token || req.headers.authorization;
    if (!token) {
      return res.status(401).json({ success: false, message: 'Not authorized, login again' });
    }

    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length);
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach userId directly to req
    req.userId = decoded.id;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false, message: 'Invalid token' });
  }
};