import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export const ShopContext = createContext();

const CART_STORAGE_KEY = "ecommerce_cart";
const WISHLIST_STORAGE_KEY = "ecommerce_wishlist";

const getInitialCart = () => {
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
};

const getInitialWishlist = () => {
  try {
    const saved = localStorage.getItem(WISHLIST_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const ShopContextProvider = (props) => {
  const currency = "$";
  const dileveryFee = 10;
  const [searchValue, setSearchValue] = useState("");
  const [cartItems, setCartItems] = useState(getInitialCart);
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");
  const [wishlistItems, setWishlistItems] = useState(getInitialWishlist);



  const handelCartItems = async (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }
    let cartData = structuredClone(cartItems);

    if (cartData[itemId] && cartData[itemId][size]) {
      toast.info("This item is already in your cart.");
      return;
    }

    if (!cartData[itemId]) {
      cartData[itemId] = {};
    }

    cartData[itemId][size] = 1;
    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          backendUrl + "/api/cart/add",
          { itemId, size },
          { headers: { token } }
        );
        toast.success("Item added to cart.");
      } catch (error) {
        console.log(error);
        toast.error("error in adding item on cart");
      }
    }
  };
  const handelCartCount =  () => {
    let cartCount = 0;
    for (let items in cartItems) {
      for (let item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            cartCount += cartItems[items][item];
          }
        } catch (error) {
          console.log("error while increasing count in Cart");
        }
      }
    }
    return cartCount;
  };

  const handleWishlistCount = () => wishlistItems.length;

  const handleCartRemoveItem = async (itemId, size, quantity) => {
    let cartRemoveItems = structuredClone(cartItems);
    cartRemoveItems[itemId][size] = quantity;
    setCartItems(cartRemoveItems);
    if(token){
      try {
        await axios.post(backendUrl + '/api/cart/update', {itemId, size, quantity}, {headers:{token}})
        toast.success('Item will be removed')
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
    }
  };

  const handelCartAmount = () => {
    let totalAmount = 0;

    for (let items in cartItems) {
      const itemInfo = products.find((product) => product._id === items);
      for (let item in cartItems[items]) {
        try {
          const quantity = cartItems[items][item];
          if (quantity > 0) {
            totalAmount += itemInfo.price * quantity;
          }
        } catch (error) {
          console.log("Error while calculating cart amount", error);
        }
      }
    }

    return totalAmount;
  };

  const getProductsData = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  
  const getUserCart = async (authToken) => {
    try {
      const response = await axios.post(backendUrl + "/api/cart/get", {}, { headers: { token: authToken } });
      if (response.data.success && response.data.cartData != null) {
        const serverCart = response.data.cartData;
        setCartItems(typeof serverCart === "object" && !Array.isArray(serverCart) ? serverCart : {});
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (e) {
      console.warn("Could not save cart to localStorage", e);
    }
  }, [cartItems]);

  // Persist wishlist to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlistItems));
    } catch (e) {
      console.warn("Could not save wishlist to localStorage", e);
    }
  }, [wishlistItems]);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (!token && storedToken) {
      setToken(storedToken);
      getUserCart(storedToken);
      getWishlist(storedToken);
    }
  }, []);

  const addToWishlist = async (productId) => {
    setWishlistItems((prev) => {
      if (prev.includes(productId)) return prev;
      return [...prev, productId];
    });
    if (token) {
      try {
        await axios.post(
          backendUrl + "/api/user/wishlist",
          { itemId: productId },
          { headers: { token } }
        );
        toast.success("Added to wishlist.");
      } catch (error) {
        console.log(error);
        toast.error("Could not add to wishlist.");
      }
    }
  };

  const handleWishlistRemoveItem = async (id) => {
    setWishlistItems((prev) => prev.filter((item) => item !== id));
    if (token) {
      try {
        await axios.delete(backendUrl + "/api/user/wishlist/remove", {
          data: { itemId: id },
          headers: { token }
        });
        toast.success("Removed from wishlist.");
      } catch (error) {
        console.log(error);
        toast.error("Could not remove from wishlist.");
      }
    }
  };

  const getWishlist = async (authToken) => {
    try {
      const response = await axios.get(backendUrl + "/api/user/wishlist", {
        headers: { token: authToken }
      });
      if (response.data.success && Array.isArray(response.data.wishlist)) {
        setWishlistItems(response.data.wishlist);
      }
    } catch (error) {
      console.log(error);
    }
  };

  

  const value = {
    products,
    currency,
    dileveryFee,
    searchValue,
    setSearchValue,
    handelCartItems,
    cartItems,
    setCartItems,
    handelCartCount,
    handleCartRemoveItem,
    handelCartAmount,
    navigate,
    dileveryFee,
    backendUrl,
    token,
    setToken,
    handleWishlistRemoveItem,
    wishlistItems,
    addToWishlist,
    handleWishlistCount
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
