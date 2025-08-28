import express from 'express';
import { loginUser, registerUser, loginAdmin } from '../controllers/authControllers.js';

const authRouter = express.Router();

authRouter.post('/login', loginUser);
authRouter.post('/register', registerUser);
authRouter.post('/loginAdmin', loginAdmin)

export { authRouter };