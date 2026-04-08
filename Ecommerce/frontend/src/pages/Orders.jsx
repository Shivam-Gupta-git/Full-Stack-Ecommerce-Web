import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import Title from "../components/Title";
import {
  FiPackage,
  FiTruck,
  FiCheckCircle,
  FiXCircle,
  FiClock,
  FiRefreshCcw,
  FiCreditCard,
  FiCalendar,
} from "react-icons/fi";

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
      console.log(error);
      setOrderData([]);
    }
  };

  useEffect(() => {
    fetchOrderData();
    // eslint-disable-next-line
  }, [token]);

  const getStatusBadge = (status) => {
    let styles =
      "bg-slate-100 text-slate-700 border-slate-200";
    let icon = <FiClock className="text-sm" />;
    let text = "Order Placed";

    if (status) {
      switch (status.toLowerCase()) {
        case "delivered":
          styles =
            "bg-emerald-100/80 text-emerald-700 border-emerald-200";
          icon = <FiCheckCircle className="text-sm" />;
          text = "Delivered";
          break;

        case "shipped":
          styles =
            "bg-amber-100/80 text-amber-700 border-amber-200";
          icon = <FiTruck className="text-sm" />;
          text = "Shipped";
          break;

        case "cancelled":
        case "canceled":
          styles =
            "bg-rose-100/80 text-rose-700 border-rose-200";
          icon = <FiXCircle className="text-sm" />;
          text = "Cancelled";
          break;

        case "processing":
          styles =
            "bg-violet-100/80 text-violet-700 border-violet-200";
          icon = <FiRefreshCcw className="text-sm" />;
          text = "Processing";
          break;

        default:
          styles =
            "bg-sky-100/80 text-sky-700 border-sky-200";
          icon = <FiPackage className="text-sm" />;
          text = status;
      }
    }

    return (
      <div
        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold tracking-wide backdrop-blur-sm ${styles}`}
      >
        {icon}
        {text}
      </div>
    );
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return "";

    const date = new Date(timestamp);

    return `${date.toLocaleDateString()} • ${date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#f8f5f2] via-[#f4efe9] to-[#ebe3da] px-4 py-8 sm:px-6 lg:px-10">
      {/* Top blur background */}
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-[#d6b89c]/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-32 h-80 w-80 rounded-full bg-[#b08968]/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Title text1={"Orders"} text2={"Details"} />

            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
              Track your recent purchases, view delivery progress and payment
              details in one place.
            </p>
          </div>

          {orderData.length > 0 && (
            <div className="rounded-2xl border border-white/60 bg-white/60 px-5 py-3 shadow-md backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                Total Orders
              </p>
              <h3 className="mt-1 text-2xl font-bold text-[#3d3128]">
                {orderData.length}
              </h3>
            </div>
          )}
        </div>

        {/* Empty State */}
        {orderData.length === 0 ? (
          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-[2rem] border border-white/50 bg-white/60 px-6 text-center shadow-xl backdrop-blur-2xl">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#ede2d6] text-[#8b5e3c] shadow-inner">
              <FiPackage className="text-4xl" />
            </div>

            <h2 className="text-2xl font-bold text-[#3d3128]">
              No Orders Yet
            </h2>

            <p className="mt-3 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
              You haven’t placed any orders yet. Once you start shopping, your
              orders will appear here beautifully organized.
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {orderData.map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 p-4 shadow-lg backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl sm:p-6"
              >
                {/* Hover gradient line */}
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#8b5e3c] via-[#c49a6c] to-[#e4c7a4] opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
                  {/* Product Image */}
                  <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-3xl border border-[#eee3d7] bg-[#f8f2ec] sm:h-32 sm:w-32 lg:mx-0">
                    <img
                      src={item.image && item.image[0]}
                      alt={item.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col gap-4">
                    <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <h2 className="max-w-2xl text-xl font-bold tracking-tight text-[#2f2a27] sm:text-2xl">
                          {item.name}
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-gray-500">
                          Premium product added to your recent order history.
                        </p>
                      </div>

                      <div className="flex justify-start lg:justify-end">
                        {getStatusBadge(item.status)}
                      </div>
                    </div>

                    {/* Info Cards */}
                    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                      <div className="rounded-2xl border border-[#eee3d7] bg-[#faf7f4] px-4 py-3 transition duration-300 hover:border-[#d8b28b] hover:bg-white">
                        <p className="text-xs uppercase tracking-wider text-gray-400">
                          Size
                        </p>
                        <h4 className="mt-1 text-sm font-semibold text-[#3d3128]">
                          {item.size}
                        </h4>
                      </div>

                      <div className="rounded-2xl border border-[#eee3d7] bg-[#faf7f4] px-4 py-3 transition duration-300 hover:border-[#d8b28b] hover:bg-white">
                        <p className="text-xs uppercase tracking-wider text-gray-400">
                          Quantity
                        </p>
                        <h4 className="mt-1 text-sm font-semibold text-[#3d3128]">
                          {item.quantity}
                        </h4>
                      </div>

                      <div className="rounded-2xl border border-[#eee3d7] bg-[#faf7f4] px-4 py-3 transition duration-300 hover:border-[#d8b28b] hover:bg-white">
                        <p className="text-xs uppercase tracking-wider text-gray-400">
                          Price
                        </p>
                        <h4 className="mt-1 text-sm font-semibold text-[#3d3128]">
                          {currency}
                          {item.price}
                        </h4>
                      </div>

                      <div className="rounded-2xl border border-[#eee3d7] bg-[#faf7f4] px-4 py-3 transition duration-300 hover:border-[#d8b28b] hover:bg-white">
                        <p className="text-xs uppercase tracking-wider text-gray-400">
                          Payment
                        </p>
                        <div className="mt-1 flex items-center gap-2 text-sm font-semibold text-[#3d3128]">
                          <FiCreditCard className="text-[#8b5e3c]" />
                          {item.paymentMethod}
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex flex-col gap-3 border-t border-[#eee3d7] pt-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <FiCalendar className="text-[#8b5e3c]" />
                        <span>
                          Ordered on{" "}
                          <span className="font-medium text-[#3d3128]">
                            {formatDate(item.date)}
                          </span>
                        </span>
                      </div>

                      <button className="w-full rounded-2xl border border-[#d8b28b] bg-white px-5 py-2.5 text-sm font-semibold text-[#8b5e3c] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8b5e3c] hover:text-white sm:w-fit">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Orders;