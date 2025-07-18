import express from 'express';
import { addProduct, removeProduct, listProduct, singleProduct } from '../controllers/productControllers.js';
import upload from '../middleware/multer.js';
import { adminAuth } from '../controllers/authControllers.js';

const productRouter = express.Router();

productRouter.post('/add',adminAuth,upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 }
  ]),
  addProduct
);

productRouter.get('/list', listProduct);
productRouter.post('/remove',adminAuth, removeProduct);
productRouter.post('/single', singleProduct);

export { productRouter };