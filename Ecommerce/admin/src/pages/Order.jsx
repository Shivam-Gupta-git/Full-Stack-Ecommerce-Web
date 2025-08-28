import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { backentUrl, currency } from "../App";
import { toast } from "react-toastify";

function Order({ token }) {
  const [orderList, setOrderList] = useState([]);

  const fetchOrderListData = async () => {
    if (!token) {
      return null;
    }
    try {
      const response = await axios.post(
        backentUrl + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrderList(response.data.order);
      } else {
        toast.error("error while in fetching data");
      }
    } catch (error) {
      console.log("error while in fetching orderlist data", error);
    }
  };

  // console.log(orderList);
  const newDate = (timestamp) => {
    if (!timestamp) {
      return "";
    }
    const date = new Date(timestamp);
    return (
      date.toLocaleDateString() +
      " , " +
      date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
  };

  const handelOrderStatus = async (event, orderId) => {
    try {
      const response = await axios.post(
        backentUrl + "/api/order/status",
        { orderId, status: event.target.value },
        { headers: { token } }
      );
      if (response.data.success) {
        await fetchOrderListData();
      }
    } catch (error) {
      console.log(error);
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    fetchOrderListData();
  }, [token]);

  return (
    <div className="p-4 space-y-6">
      {orderList.map((order, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg p-6 space-y-4 border border-gray-200"
        >
          {/* Items Section */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-gray-800">
                Items Ordered
              </h2>
              {order.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-2 rounded-lg bg-gray-50"
                >
                  {idx === order.items.length - 1 && (
                    <img
                      src={item.image[0]}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md border"
                    />
                  )}
                  <div>
                    <p className="font-medium text-gray-700">
                      {item.name} × {item.quantity}{" "}
                      <span className="text-sm text-gray-500">
                        ({item.size})
                      </span>
                    </p>
                    {idx === order.items.length - 1 && (
                      <p className="text-sm text-green-600 font-semibold mt-1">
                        {currency}
                        {item.price}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Address & Contact */}
            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-gray-800">
                Shipping Info
              </h2>
              <p className="text-gray-700 font-medium">
                {order.address.fullName}
              </p>
              <p className="text-gray-600">
                {order.address.city}, {order.address.state},{" "}
                {order.address.pinCode}
              </p>
              <p className="text-gray-600">{order.address.fullAddress}</p>
              <p className="text-gray-600">
                {order.address.contact} | {order.address.email}
              </p>
            </div>
          </div>

          {/* Order Summary */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4 border-t border-gray-200">
            <div className="space-y-1">
              <p className="text-gray-700">
                <span className="font-medium">Items:</span> {order.items.length}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Method:</span> COD
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Payment:</span>{" "}
                <span
                  className={`font-semibold ${
                    order.payment ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {order.payment ? "Done" : "Pending"}
                </span>
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Date:</span> {newDate(order.date)}
              </p>
            </div>

            {/* Status Dropdown */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Order Status
              </label>
              <select
                onChange={(event) => handelOrderStatus(event, order._id)}
                value={order.status}
                className="border rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out of delivery">Out of delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Order;
