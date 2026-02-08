import User from '../model/userModel.js'

export const addCartItems = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;
    const userData = await User.findById(userId);
    let cartData = userData?.cartData && typeof userData.cartData === "object" ? { ...userData.cartData } : {};

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    await User.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Add to Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}; 

// backend/controllers/cartControllers.js


export const updateCartItems = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;

    const userData = await User.findById(userId);
    if (!userData) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const cartData = userData.cartData || {};

    if (cartData[itemId]) {
      if (quantity === 0) {
        delete cartData[itemId][size]; // remove that size

        // if no sizes left for this item, remove item entirely
        if (Object.keys(cartData[itemId]).length === 0) {
          delete cartData[itemId];
        }
      } else {
        cartData[itemId][size] = quantity;
      }
    }

    await User.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: 'Cart updated' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getUserCartdata = async (req, res) => {
  try {
    const { userId } = req.body;
    const userData = await User.findById(userId);
    const cartData = userData?.cartData && typeof userData.cartData === "object" ? userData.cartData : {};

    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};