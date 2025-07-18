import { createContext, useEffect, useState } from "react"
import { products }from "../components/assets/frontend_assets/assets"
import { toast } from "react-toastify"

export const ShopContext = createContext()

const ShopContextProvider = (props) => {
  const currency = '$'
  const dileveryFee = 10
  const[searchValue, setSearchValue] = useState('')
  const[cartItems, setCartItems] = useState({})

  const handelCartItems = async (cartItemId, size) => {
    if (!size) {
      toast.error('Select Product Size')
      return
    }
    const cartItemsData = structuredClone(cartItems)

    if (cartItemsData[cartItemId] && cartItemsData[cartItemId][size]) {
      toast.info('This item is already in your cart.')
      return
    }

    if (!cartItemsData[cartItemId]) {
      cartItemsData[cartItemId] = {}
    }
  
    cartItemsData[cartItemId][size] = 1
    setCartItems(cartItemsData)
    toast.success('Item added to cart.')
  }


  useEffect(()=>{
    console.log(cartItems)
  },[cartItems])

  const handelCartCount =  ()=>{
    let cartCount = 0
    for(let items in cartItems){
      for(let item in cartItems[items]){
        try {
         if(cartItems[items][item] > 0 ){
           cartCount += cartItems[items][item]
         }
        } catch (error) {
          console.log('error while increasing count in Cart')
        }
      }
    }
    return cartCount
  }

  const handleCartRemoveItem = async (itemid, itemSize, quantity)=>{
    let cartRemoveItems = structuredClone(cartItems)
    cartRemoveItems[itemid][itemSize] =  quantity
    setCartItems(cartRemoveItems)
  }

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
          console.log('Error while calculating cart amount', error);
        }
      }
    }
  
    return totalAmount;
  };



 
  const value = {
    products, 
    currency, 
    dileveryFee, 
    searchValue, 
    setSearchValue, 
    handelCartItems, 
    cartItems , 
    handelCartCount, 
    handleCartRemoveItem,
    handelCartAmount,
    dileveryFee,
  }
  return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
}
export default ShopContextProvider

