import React, { useEffect, useState } from 'react';
import { CiCircleChevRight, CiCircleChevLeft } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiViewList } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const [sidebarText, setSidebarText] = useState(false);

  useEffect(() => {
    let timeout;

    if (sidebar) {
      timeout = setTimeout(() => {
        setSidebarText(true);
      }, 300);
    } else {
      setSidebarText(false);
    }
    return () => clearTimeout(timeout);
  }, [sidebar]);

  const handleSidebarIcon = (event) => {
    event.preventDefault();
    setSidebar((prev) => !prev);
  };

  return (
    <div className='flex flex-row '>
      <div
        className={`flex h-[100vh] bg-white shadow-sm shadow-gray-400 flex-col transform transition-all duration-700 ease-in-out fixed z-50
          ${sidebar ? 'w-40 md:w-60' : 'w-14 md:w-16'}`}
      >
        <div className="flex justify-end ">
          {sidebar ? (
            <CiCircleChevLeft onClick={handleSidebarIcon} className="text-2xl md:text-3xl mt-2 mr-3 cursor-pointer bg-blue-300 rounded-2xl text-white hover:scale-105 duration-400" />
          ) : (
            <CiCircleChevRight onClick={handleSidebarIcon} className="text-2xl md:text-3xl mt-2 mr-3 cursor-pointer  bg-blue-300 rounded-2xl text-white hover:scale-105 duration-400" />
          )}
        </div>

        <NavLink
          to="/Add"
          className="flex flex-row items-center  py-3 px-3 gap-1 shadow-sm shadow-gray-300 mt-5 hover:bg-blue-300 hover:text-white transition-all duration-500 ease-in-out"
        >
          <IoIosAddCircleOutline className="text-2xl md:text-3xl" />
          {sidebarText && <p className=" md:text-xl">Add Items</p>}
        </NavLink>

        <NavLink
          to="/List"
          className="flex flex-row items-center  py-3 px-3 gap-1 shadow-sm shadow-gray-300 mt-5 hover:bg-blue-300 hover:text-white transition-all duration-500 ease-in-out"
        >
          <CiViewList className="text-2xl md:text-3xl" />
          {sidebarText && <p className=" md:text-xl">List Items</p>}
        </NavLink>

        <NavLink
          to="/Order"
          className="flex flex-row items-center  py-3 px-3 gap-1 shadow-sm shadow-gray-300 mt-5 hover:bg-blue-300 hover:text-white transition-all duration-500 ease-in-out"
        >
          <PiShoppingCartThin className="text-2xl md:text-3xl" />
          {sidebarText && <p className=" md:text-xl">Order Items</p>}
        </NavLink>
      </div>
      <div className='w-[100%] h-200 ml-15'></div>
    </div>
  );
}

export default Sidebar;