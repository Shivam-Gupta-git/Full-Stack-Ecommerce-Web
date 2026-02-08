import User from '../model/userModel.js';

export const addWishlistItem = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    const userData = await User.findById(userId);
    if (!userData) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    let wishlistData = userData.wishlistData || [];

    // avoid duplicates
    if (!wishlistData.includes(itemId)) {
      wishlistData.push(itemId);
    }

    await User.findByIdAndUpdate(userId, { wishlistData });

    res.json({ success: true, message: 'Added to Wishlist' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getWishlistItems = async (req, res) => {
  try {
    const { userId } = req.body;

    const userData = await User.findById(userId).select('wishlistData');

    if (!userData) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    const list = Array.isArray(userData.wishlistData) ? userData.wishlistData : [];
    res.json({
      success: true,
      wishlist: list
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const removeWishlistItem = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    const userData = await User.findById(userId);

    if (!userData) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    const wishlistData = Array.isArray(userData.wishlistData) ? userData.wishlistData : [];
    const updated = wishlistData.filter((id) => id.toString() !== itemId);
    await User.findByIdAndUpdate(userId, { wishlistData: updated });

    res.json({
      success: true,
      message: 'Item removed from wishlist'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};