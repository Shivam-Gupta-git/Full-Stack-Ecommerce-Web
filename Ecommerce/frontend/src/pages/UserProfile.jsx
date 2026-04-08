import React from "react";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiEdit2,
  FiShoppingBag,
  FiHeart,
} from "react-icons/fi";

function UserProfile() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f5f2] via-[#f4efe9] to-[#ebe3da] px-4 py-8 sm:px-6 lg:px-10">
      {/* Background Blur Effects */}
      <div className="pointer-events-none absolute top-0 left-0 h-72 w-72 rounded-full bg-[#d6b89c]/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#b08968]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-[#9c7b5d]">
              My Account
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-[#2f2a27] sm:text-4xl">
              User Profile
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              Manage your personal information, account details and shopping
              preferences from one beautiful place.
            </p>
          </div>

          <button className="group flex w-full items-center justify-center gap-2 rounded-2xl border border-[#d8b28b] bg-white/80 px-5 py-3 text-sm font-semibold text-[#8b5e3c] shadow-md backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#8b5e3c] hover:text-white sm:w-fit">
            <FiEdit2 className="transition-transform duration-300 group-hover:rotate-12" />
            Edit Profile
          </button>
        </div>

        {/* Main Profile Card */}
        <div className="overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 shadow-2xl backdrop-blur-2xl">
          {/* Top Banner */}
          <div className="relative h-36 bg-gradient-to-r from-[#8b5e3c] via-[#b08968] to-[#d6b89c] sm:h-44">
            <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 sm:left-10 sm:translate-x-0">
              <div className="group relative flex h-28 w-28 items-center justify-center rounded-3xl border-4 border-white bg-white shadow-2xl transition duration-500 hover:scale-105 sm:h-32 sm:w-32">
                <div className="flex h-full w-full items-center justify-center rounded-[1.4rem] bg-gradient-to-br from-[#f3ebe4] to-[#e6d5c5]">
                  <FiUser className="text-5xl text-[#8b5e3c] transition duration-500 group-hover:scale-110" />
                </div>

                {/* Online dot */}
                <span className="absolute bottom-2 right-2 h-4 w-4 rounded-full border-2 border-white bg-emerald-500 shadow-md animate-pulse" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-4 pb-8 pt-20 sm:px-8 sm:pt-16 lg:px-10">
            {/* Name + role */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-bold tracking-tight text-[#2f2a27] sm:text-3xl">
                  Shivam Gupta
                </h2>

                <p className="mt-2 text-sm font-medium tracking-wide text-[#9c7b5d] sm:text-base">
                  Premium Customer
                </p>
              </div>

              <div className="mx-auto flex gap-3 sm:mx-0">
                <div className="rounded-2xl border border-[#eee3d7] bg-[#faf7f4] px-5 py-3 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                  <p className="text-xs uppercase tracking-wider text-gray-400">
                    Orders
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-[#3d3128]">12</h3>
                </div>

                <div className="rounded-2xl border border-[#eee3d7] bg-[#faf7f4] px-5 py-3 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                  <p className="text-xs uppercase tracking-wider text-gray-400">
                    Wishlist
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-[#3d3128]">08</h3>
                </div>
              </div>
            </div>

            {/* Profile Details */}
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <div className="group rounded-3xl border border-[#eee3d7] bg-[#faf7f4] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#d8b28b] hover:bg-white hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#efe2d4] text-[#8b5e3c] transition duration-300 group-hover:scale-110">
                  <FiMail className="text-xl" />
                </div>

                <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                  Email Address
                </p>

                <h3 className="mt-2 text-base font-semibold text-[#2f2a27] break-all">
                  shivam@example.com
                </h3>
              </div>

              <div className="group rounded-3xl border border-[#eee3d7] bg-[#faf7f4] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#d8b28b] hover:bg-white hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#efe2d4] text-[#8b5e3c] transition duration-300 group-hover:scale-110">
                  <FiPhone className="text-xl" />
                </div>

                <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                  Phone Number
                </p>

                <h3 className="mt-2 text-base font-semibold text-[#2f2a27]">
                  +91 98765 43210
                </h3>
              </div>

              <div className="group rounded-3xl border border-[#eee3d7] bg-[#faf7f4] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#d8b28b] hover:bg-white hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#efe2d4] text-[#8b5e3c] transition duration-300 group-hover:scale-110">
                  <FiMapPin className="text-xl" />
                </div>

                <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                  Address
                </p>

                <h3 className="mt-2 text-base font-semibold leading-7 text-[#2f2a27]">
                  Agwar, Uttar Pradesh, India
                </h3>
              </div>

              <div className="group rounded-3xl border border-[#eee3d7] bg-[#faf7f4] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#d8b28b] hover:bg-white hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#efe2d4] text-[#8b5e3c] transition duration-300 group-hover:scale-110">
                  <FiShoppingBag className="text-xl" />
                </div>

                <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                  Favorite Category
                </p>

                <h3 className="mt-2 text-base font-semibold text-[#2f2a27]">
                  Fashion & Accessories
                </h3>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              <div className="rounded-3xl border border-[#eee3d7] bg-gradient-to-br from-[#fffaf6] to-[#f5ebe3] p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#8b5e3c] text-white">
                    <FiHeart className="text-xl" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#2f2a27]">
                      Loyalty Status
                    </h3>
                    <p className="text-sm text-gray-500">
                      You are one of our top returning customers.
                    </p>
                  </div>
                </div>

                <div className="mt-6 h-3 overflow-hidden rounded-full bg-[#eadccf]">
                  <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-[#8b5e3c] to-[#c49a6c] transition-all duration-1000" />
                </div>

                <div className="mt-3 flex items-center justify-between text-sm">
                  <span className="text-gray-500">78% to Gold Member</span>
                  <span className="font-semibold text-[#8b5e3c]">780 pts</span>
                </div>
              </div>

              <div className="rounded-3xl border border-[#eee3d7] bg-[#faf7f4] p-6 shadow-sm">
                <h3 className="text-lg font-bold text-[#2f2a27]">
                  Account Activity
                </h3>

                <div className="mt-5 space-y-4">
                  <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm">
                    <div>
                      <p className="text-sm font-medium text-[#2f2a27]">
                        Last Login
                      </p>
                      <p className="text-xs text-gray-500">Today, 09:30 AM</p>
                    </div>

                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                      Active
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm">
                    <div>
                      <p className="text-sm font-medium text-[#2f2a27]">
                        Recent Order
                      </p>
                      <p className="text-xs text-gray-500">
                        2 items purchased
                      </p>
                    </div>

                    <span className="text-sm font-semibold text-[#8b5e3c]">
                      ₹2,499
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;