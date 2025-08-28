import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar";
import Add from "./pages/Add";
import List from "./pages/List";
import Order from "./pages/Order";
import { useEffect, useState } from "react";
import AdminLogin from "./components/AdminLogin";
import { ToastContainer, toast } from 'react-toastify';

export const backentUrl = import.meta.env.VITE_BACKEND_URL
export const currency = '$'

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '');

  useEffect(()=>{
   localStorage.setItem('token', token)
  }, [token])

  return (
    <>
      <div className="w-full h-full flex flex-col">
        <ToastContainer></ToastContainer>
        {token === "" ? (
          <AdminLogin setToken = {setToken}></AdminLogin>
        ) : (
          <>
            <Navbar setToken={setToken}></Navbar>
            <div className="h-full w-full flex flex-row ">
              <div className="">
                <Sidebar></Sidebar>
              </div>
              <div className="h-full w-[100%] p-5">
                <Routes>
                  <Route path={"/Add"} element={<Add token={token} />}></Route>
                  <Route path={"/List"} element={<List token={token} />}></Route>
                  <Route path={"/Order"} element={<Order token={token} />}></Route>
                </Routes>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App; 
