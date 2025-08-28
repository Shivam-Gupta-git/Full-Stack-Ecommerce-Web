import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const dileveryFee = 10;
  const [searchValue, setSearchValue] = useState("");
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");

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

  
  const getUserCart = async (token)=> {
    try {
      const response = await axios.post(backendUrl + '/api/cart/get',{}, {headers:{token}})
      if(response.data.success){
        setCartItems(response.data.cartData)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  
  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      getUserCart(localStorage.getItem("token"))
    }
  }, []);

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
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
