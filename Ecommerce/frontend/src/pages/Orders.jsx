import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import Title from '../components/Title'

function Orders() {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const fetchOrderData = async () => {
    try {
      if (!token) {
        setOrderData([]);

        return;
      }
      const response = await axios.post(
        backendUrl + "/api/order/userOrder",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        let allOrdersItems = [];
        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allOrdersItems.push(item);
          });
        });
        setOrderData(allOrdersItems);
      } else {
        setOrderData([]);
      }
    } catch (error) {
      setOrderData([]);
    } finally {
    }
  };
console.log(orderData)
  useEffect(() => {
    fetchOrderData();
    // eslint-disable-next-line
  }, [token]);

  // Helper for status badge color and icon
  const getStatusBadge = (status) => {
    let color = "bg-blue-100 text-blue-700";
    let text = "Order Placed";
    let icon = "📦";
    if (status) {
      switch (status.toLowerCase()) {
        case "delivered":
          color = "bg-green-100 text-green-700";
          text = "Delivered";
          icon = "✅";
          break;
        case "shipped":
          color = "bg-yellow-100 text-yellow-700";
          text = "Shipped";
          icon = "🚚";
          break;
        case "cancelled":
        case "canceled":
          color = "bg-red-100 text-red-700";
          text = "Cancelled";
          icon = "❌";
          break;
        case "order placed":
          color = "bg-blue-100 text-blue-700";
          text = "Order Placed";
          icon = "📦";
          break;
        default:
          color = "bg-gray-200 text-gray-600";
          text = status;
          icon = "ℹ️";
      }
    }
    return (
      <span
        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${color} border border-opacity-30 border-current shadow-sm`}
      >
        <span>{icon}</span> {text}
      </span>
    );
  };

  // Helper for date formatting
  const formatDate = (timestamp) => {
    if (!timestamp) return "";
    const date = new Date(timestamp);
    return (
      date.toLocaleDateString() +
      " " +
      date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
  };
console.log(orderData)
  return (
    <div className="w-full min-h-screen bg-gradient-to-br mt-2 flex flex-col items-center ">
      {/* Main Content */}
      <div className="w-[100%] flex justify-start mt-3">
        <div className="ml-[8%]">
      <Title text1={'Orders'} text2={'Details'}></Title>
        </div>
      </div>
      <div className="w-full max-w-7xl px-2 sm:px-6 md:px-8">
       
          <div className="flex flex-col gap-8 pb-16 mt-5">
            {orderData.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col md:flex-row items-center p-5 border border-gray-100 hover:border-blue-200"
              >
                {/* Product Image */}
                <div className="w-28 h-28 md:w-32 md:h-32 flex-shrink-0 overflow-hidden rounded-xl border border-gray-200 mr-0 md:mr-5 mb-4 md:mb-0">
                  <img
                    src={item.image && item.image[0]}
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Details */}
                <div className="flex flex-col flex-grow w-full">
                  <div className="flex flex-row items-center justify-between mb-2">
                    <h2 className="text-lg md:text-xl font-bold text-gray-800 truncate">
                      {item.name}
                    </h2>
                    {getStatusBadge(item.status)}
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-2">
                    <span className="bg-gray-100 px-2 py-1 rounded">
                      Size: <span className="font-semibold">{item.size}</span>
                    </span>
                    <span className="bg-gray-100 px-2 py-1 rounded">
                      Qty:{" "}
                      <span className="font-semibold">{item.quantity}</span>
                    </span>
                    <span className="bg-gray-100 px-2 py-1 rounded">
                      {currency}
                      <span className="font-semibold">{item.price}</span>
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-1">
                    <span>
                      Payment:{item.paymentMethod}
                      <span>
                      </span>
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    Ordered on:{" "}
                    <span className="font-medium">{formatDate(item.date)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}

export default Orders;
