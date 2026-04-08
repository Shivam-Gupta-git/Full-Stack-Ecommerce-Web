import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IoSearch, IoBagOutline } from "react-icons/io5";
import { FaRegUser, FaRegHeart, FaBars } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineCollections, MdOutlineCancel } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoIosContact } from "react-icons/io";
import { ShopContext } from "../context/ShopContext";

function Navbar() {
  const {
    setSearchValue,
    handelCartCount,
    token,
    setToken,
    setCartItems,
    navigate,
    handleWishlistCount,
  } = useContext(ShopContext);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [userDropDown, setUserDropDown] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchIconVisible, setSearchIconVisible] = useState(false);

  const dropDownRef = useRef();
  const location = useLocation();

  const toggleSearch = () => setIsSearchOpen((prev) => !prev);
  const toggleUserDropDown = () => setUserDropDown((prev) => !prev);
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setIsSearchOpen(false);
        setUserDropDown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setSearchIconVisible(location.pathname.includes("Collection"));
  }, [location]);

  const logoutUser = () => {
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    navigate("/login");
  };

  const navItemClass = ({ isActive }) =>
    `relative px-1 py-2 text-[15px] lg:text-base font-medium tracking-wide transition-all duration-300 ${
      isActive
        ? "text-[#7b5b44]"
        : "text-[#5f5145] hover:text-[#9a6f4d]"
    }`;

  const sidebarItemClass = ({ isActive }) =>
    `group flex items-center gap-3 rounded-2xl px-4 py-3 text-[15px] font-medium transition-all duration-300 ${
      isActive
        ? "bg-gradient-to-r from-[#b08968] to-[#d8b89a] text-white shadow-lg"
        : "text-[#5f5145] hover:bg-[#f4ece4] hover:text-[#8b5e3c]"
    }`;

  return (
    <>
      <nav
        ref={dropDownRef}
        className="sticky top-0 z-50 border-b border-white/30 bg-[#f8f5f1]/85 backdrop-blur-2xl"
      >
        {/* Top Gradient Line */}
        <div className="h-[2px] w-full bg-gradient-to-r from-[#b08968] via-[#d6b89c] to-[#8b5e3c]" />

        {/* Main Navbar */}
        <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-3 transition-all duration-300"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8b5e3c] via-[#b08968] to-[#d7b18f] text-lg font-bold text-white shadow-[0_10px_30px_rgba(176,137,104,0.35)] transition-all duration-500 group-hover:scale-105 group-hover:rotate-3">
              S
            </div>

            <div className="hidden sm:block">
              <h1 className="text-xl font-bold tracking-[0.25em] text-[#2d241d]">
                SHOPLY
              </h1>
              <p className="-mt-1 text-[11px] uppercase tracking-[0.35em] text-[#9a7b63]">
                Modern Fashion
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-8 lg:flex">
            <NavLink to="/" className={navItemClass}>
              {({ isActive }) => (
                <span className="relative">
                  Home
                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-[#b08968] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </span>
              )}
            </NavLink>

            <NavLink to="/Collection" className={navItemClass}>
              {({ isActive }) => (
                <span className="relative">
                  Collection
                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-[#b08968] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </span>
              )}
            </NavLink>

            <NavLink to="/About" className={navItemClass}>
              {({ isActive }) => (
                <span className="relative">
                  About
                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-[#b08968] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </span>
              )}
            </NavLink>

            <NavLink to="/Contact" className={navItemClass}>
              {({ isActive }) => (
                <span className="relative">
                  Contact
                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-[#b08968] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </span>
              )}
            </NavLink>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search */}
            {searchIconVisible && (
              <button
                onClick={toggleSearch}
                className={`flex h-11 w-11 items-center justify-center rounded-2xl border transition-all duration-300 ${
                  isSearchOpen
                    ? "border-[#b08968] bg-[#b08968] text-white shadow-lg"
                    : "border-[#eadfd3] bg-white/70 text-[#6f5d4f] hover:border-[#d3b69b] hover:text-[#8b5e3c]"
                }`}
              >
                <IoSearch className="text-xl" />
              </button>
            )}

            {/* Wishlist */}
            <Link
              to="/Wishlist"
              className="relative hidden h-11 w-11 items-center justify-center rounded-2xl border border-[#eadfd3] bg-white/70 text-[#6f5d4f] transition-all duration-300 hover:-translate-y-1 hover:border-[#d3b69b] hover:text-[#8b5e3c] hover:shadow-lg md:flex"
            >
              <FaRegHeart className="text-[18px]" />
              <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-gradient-to-r from-[#8b5e3c] to-[#b08968] px-1 text-[10px] font-semibold text-white shadow-md">
                {handleWishlistCount()}
              </span>
            </Link>

            {/* Cart */}
            <Link
              to="/Cart"
              className="relative hidden h-11 w-11 items-center justify-center rounded-2xl border border-[#eadfd3] bg-white/70 text-[#6f5d4f] transition-all duration-300 hover:-translate-y-1 hover:border-[#d3b69b] hover:text-[#8b5e3c] hover:shadow-lg md:flex"
            >
              <IoBagOutline className="text-[21px]" />
              <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-gradient-to-r from-[#8b5e3c] to-[#b08968] px-1 text-[10px] font-semibold text-white shadow-md">
                {handelCartCount()}
              </span>
            </Link>

            {/* User */}
            <div className="relative">
              <button
                onClick={() => {
                  if (!token) {
                    navigate("/login");
                  } else {
                    toggleUserDropDown();
                  }
                }}
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#eadfd3] bg-white/70 text-[#6f5d4f] transition-all duration-300 hover:-translate-y-1 hover:border-[#d3b69b] hover:text-[#8b5e3c] hover:shadow-lg"
              >
                <FaRegUser className="text-[18px]" />
              </button>

              {token && userDropDown && (
                <div className="absolute right-0 top-14 w-52 overflow-hidden rounded-3xl border border-white/60 bg-white/95 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-2xl animate-[fadeIn_0.25s_ease]">
                  <button
                    onClick={() => navigate("/UserProfile")}
                    className="flex w-full items-center rounded-2xl px-4 py-3 text-left text-[15px] font-medium text-[#5f5145] transition-all duration-300 hover:bg-[#f5eee8] hover:text-[#8b5e3c]"
                  >
                    My Profile
                  </button>

                  <button
                    onClick={() => navigate("/Orders")}
                    className="flex w-full items-center rounded-2xl px-4 py-3 text-left text-[15px] font-medium text-[#5f5145] transition-all duration-300 hover:bg-[#f5eee8] hover:text-[#8b5e3c]"
                  >
                    Orders
                  </button>

                  <div className="my-2 h-px bg-[#eee2d7]" />

                  <button
                    onClick={logoutUser}
                    className="flex w-full items-center rounded-2xl px-4 py-3 text-left text-[15px] font-medium text-[#c05c4d] transition-all duration-300 hover:bg-[#fff0ed]"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleSidebar}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#eadfd3] bg-white/70 text-[#6f5d4f] transition-all duration-300 hover:border-[#d3b69b] hover:text-[#8b5e3c] lg:hidden"
            >
              {sidebarOpen ? (
                <MdOutlineCancel className="text-2xl" />
              ) : (
                <FaBars className="text-lg" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            isSearchOpen ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mx-auto max-w-4xl px-4 pb-5 sm:px-6">
            <div className="relative">
              <IoSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-xl text-[#a1846b]" />

              <input
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search premium products..."
                className="w-full rounded-3xl border border-[#eadfd3] bg-white/90 py-4 pl-14 pr-5 text-[15px] text-[#4b4038] shadow-[0_10px_30px_rgba(0,0,0,0.05)] outline-none transition-all duration-300 placeholder:text-[#a79384] focus:border-[#b08968] focus:ring-4 focus:ring-[#b08968]/15"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setSidebarOpen(false)}
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-all duration-500 lg:hidden ${
          sidebarOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed left-0 top-0 z-50 flex h-full w-[82%] max-w-[340px] flex-col border-r border-white/40 bg-[#fbf8f4]/95 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8b5e3c] to-[#c49a6c] text-lg font-bold text-white">
              S
            </div>

            <div>
              <h2 className="text-lg font-bold tracking-[0.2em] text-[#2d241d]">
                SHOPLY
              </h2>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#9a7b63]">
                Fashion Store
              </p>
            </div>
          </div>

          <button
            onClick={toggleSidebar}
            className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#7b5b44] shadow-md"
          >
            <MdOutlineCancel className="text-2xl" />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-1 flex-col gap-3">
          <NavLink to="/" onClick={toggleSidebar} className={sidebarItemClass}>
            <IoHomeOutline className="text-lg" />
            Home
          </NavLink>

          <Link
            to="/Cart"
            onClick={toggleSidebar}
            className="group flex items-center justify-between rounded-2xl px-4 py-3 text-[15px] font-medium text-[#5f5145] transition-all duration-300 hover:bg-[#f4ece4] hover:text-[#8b5e3c]"
          >
            <div className="flex items-center gap-3">
              <IoBagOutline className="text-lg" />
              Cart
            </div>

            <span className="flex h-6 min-w-[24px] items-center justify-center rounded-full bg-[#8b5e3c] px-2 text-[11px] font-semibold text-white">
              {handelCartCount()}
            </span>
          </Link>

          <Link
            to="/Wishlist"
            onClick={toggleSidebar}
            className="group flex items-center justify-between rounded-2xl px-4 py-3 text-[15px] font-medium text-[#5f5145] transition-all duration-300 hover:bg-[#f4ece4] hover:text-[#8b5e3c]"
          >
            <div className="flex items-center gap-3">
              <FaRegHeart className="text-lg" />
              Wishlist
            </div>

            <span className="flex h-6 min-w-[24px] items-center justify-center rounded-full bg-[#8b5e3c] px-2 text-[11px] font-semibold text-white">
              {handleWishlistCount()}
            </span>
          </Link>

          <NavLink
            to="/Collection"
            onClick={toggleSidebar}
            className={sidebarItemClass}
          >
            <MdOutlineCollections className="text-lg" />
            Collection
          </NavLink>

          <NavLink
            to="/About"
            onClick={toggleSidebar}
            className={sidebarItemClass}
          >
            <AiOutlineInfoCircle className="text-lg" />
            About
          </NavLink>

          <NavLink
            to="/Contact"
            onClick={toggleSidebar}
            className={sidebarItemClass}
          >
            <IoIosContact className="text-lg" />
            Contact
          </NavLink>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 rounded-3xl bg-gradient-to-r from-[#8b5e3c] via-[#b08968] to-[#d7b18f] p-5 text-white shadow-xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/70">
            New Collection
          </p>
          <h3 className="mt-2 text-lg font-semibold">
            Discover your premium style
          </h3>
          <p className="mt-2 text-sm leading-6 text-white/80">
            Explore trending products and modern fashion made for you.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;