import express from 'express'
import { addCartItems, getUserCartdata, updateCartItems } from '../controllers/cartControllers.js'
import { userAuth } from '../middleware/userAuth.js'

const cartRouter = express.Router()

cartRouter.post('/get', userAuth, getUserCartdata)
cartRouter.post('/add', userAuth, addCartItems)
cartRouter.post('/update', userAuth, updateCartItems)

export { cartRouter }