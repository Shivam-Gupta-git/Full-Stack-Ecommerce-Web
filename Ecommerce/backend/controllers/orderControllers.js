import Order from "../model/orderModule.js";
import User from "../model/userModel.js";

export const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    const orderData = {
      userId,
      items,
      amount,
      address,
      paymenyMethod: "COD",
      payment: false,
      date: Date.now(),
    };
    const newOrder = new Order(orderData);
    await newOrder.save();
    await User.findByIdAndUpdate(userId, { cartData: {} });
    res.json({ success: true, message: "order Placed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export const cashOnDelivery = (req, res) => {};

export const upiPaymentMethod = (req, res) => {};

export const allOrders = async (req, res) => {
  try {
    const order = await Order.find({})
    res.json({success: true, order})
  } catch (error) {
    console.log(error)
    res.json({success:false, message: error.message})
  }
};

export const userOrders = async (req, res) => {
  try {
     const {userId} = req.body;

     const orders = await Order.find({ userId })
     res.json({success: true, orders})
  } catch (error) {
    console.log(error)
    res.json({success: false, message: error.message})
  }
};

export const updateStatus = async (req, res) => {
  try {
    const {orderId, status} = req.body;
    console.log(orderId, status)

    await Order.findByIdAndUpdate(orderId, { status })
    res.json({status: true, message: 'status updated'})
  } catch (error) {
   console.log(error)
   res.json({success: false, message: error.message})
  }
};
