import { check, validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../model/userModel.js';


const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};


export const registerUser = [
  check('userName')
    .trim()
    .isLength({ min: 2 })
    .withMessage('First Name should be at least two characters long'),

  check('email')
    .isEmail()
    .withMessage('Please enter a valid email')
    .normalizeEmail(),

  check('password')
    .isLength({ min: 5 })
    .withMessage('Password should be at least 5 characters long'),

  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
      }

      const { userName, email, password } = req.body;

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ success: false, message: 'User already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 12);

      const newUser = new User({
        userName,
        email,
        password: hashedPassword,
      });

      const savedUser = await newUser.save();

      const token = createToken(savedUser._id);

      res.status(201).json({ success: true, token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: error.message });
    }
  }
];

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const registeredUser = await User.findOne({ email });

    if (!registeredUser) {
      return res.status(400).json({ success: false, message: "User doesn't exist" });
    }

    const isMatch = await bcrypt.compare(password, registeredUser.password);
    if (isMatch) {
      const token = createToken(registeredUser._id);
      return res.status(200).json({ success: true, token });
    } else {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET)
      res.json({ success: true, token })
    } else {
      res.json({ success: false, message: 'Invalid admin credentials' })
    }
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

export const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers
    if (!token) {
      return res.json({ success: false, message: 'Not Authorized Login Again' })
    }
    const token_decoded = jwt.verify(token, process.env.JWT_SECRET)
    if (token_decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({ success: false, message: 'Not Authorized Login Again' })
    }
    next()
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}
