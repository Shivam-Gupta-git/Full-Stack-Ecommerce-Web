import express from 'express';
import { userAuth } from '../middleware/userAuth.js';
import { addWishlistItem, getWishlistItems, removeWishlistItem } from '../controllers/addWishlistItem.js';

const wishlistRouter = express.Router();

wishlistRouter.post('/wishlist', userAuth, addWishlistItem);
wishlistRouter.get('/wishlist', userAuth, getWishlistItems);
wishlistRouter.delete('/wishlist/remove', userAuth, removeWishlistItem);

export default wishlistRouter;