import express from "express";
import {
  placeOrder,
  cashOnDelivery,
  upiPaymentMethod,
  allOrders,
  userOrders,
  updateStatus,
} from "../controllers/orderControllers.js";
import { adminAuth } from "../controllers/authControllers.js";
import { userAuth } from "../middleware/userAuth.js";

const orderRouter = express.Router();

// Admin
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

// Payment
orderRouter.post("/placeOrder", userAuth, placeOrder);
orderRouter.post("/cod", userAuth, cashOnDelivery);
orderRouter.post("/upiPayment", userAuth, upiPaymentMethod);

// user
orderRouter.post("/userOrder", userAuth, userOrders);

export { orderRouter };
