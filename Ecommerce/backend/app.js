// External modules
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';

// Local Modules
import { authRouter } from './routers/authRouter.js';
import { productRouter } from './routers/productRouter.js';
import { cartRouter } from './routers/cartRouter.js';
import { orderRouter } from './routers/orderRouter.js';
import wishlistRouter from './routers/wishlistRouter.js';

const app = express();

// API Config
dotenv.config();
const PORT = process.env.PORT || 3000;
connectDB();
connectCloudinary();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/user', authRouter);
app.use('/api/user', wishlistRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

app.get('/', (req, res) => {
  res.send('Fetch API successfully');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});