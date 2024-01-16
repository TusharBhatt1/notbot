import logo from "../assets/logo.png";
import { FaRegUser } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { googleLogout } from "@react-oauth/google";
import {  useNavigate } from "react-router-dom";


export default function Navbar() {
  
  const navigate= useNavigate()
  const [showSideMenus, setShowSideMenus] = useState(false);
  const menus = ["Booking Types", "Date Polls", "My Bookings", "My Contacts"];
  const sidemenus = [
    "Settings",
    "Integrations",
    "Directory",
    "Pricing",
    "Roadmap",
    "Feature requests",
    "Help",
    "Logout",
  ];
  
  const onLogout=()=>{
    googleLogout()
    localStorage.removeItem("user_name")
    navigate("/")
  }
  return (
    <>
      <div className="hidden sm:flex justify-between items-center">
        <div>
          <img src={logo} alt="logo" className="h-10 w-10" />
        </div>
        <div className="flex gap-7">
          {menus.map((menu, index) => (
            <p
              className={`${
                index === 0 ? "text-black" : " text-slate-500"
              } hover:text-slate-700 cursor-pointer`}
              key={index}
            >
              {menu}
            </p>
          ))}
        </div>
        <div className="flex justify-center items-center gap-7">
          <p className="font-bold text-blue-500">Upgrade $29 lifetime access</p>
          <p className="flex items-center gap-2"><FaRegUser size={24} />{localStorage.getItem("user_name")}</p>
          <div>
            <p>Earnings : $0.00</p>
            {showSideMenus && (
              <div className="flex flex-col gap-2 p-2 absolute bg-white border border-slate-400 mt-2">
                {sidemenus.map((menu, index) => (
                  <p
                  onClick={menu === "Logout" ? () => onLogout() : undefined}
                  className="hover:bg-slate-200 rounded-xl cursor-pointer p-2"
                    key={index}
                  >
                    {menu}
                  </p>
                ))}
              </div>
            )}
          </div>

          {showSideMenus ? (
            <IoClose
              onClick={() => setShowSideMenus(false)}
              className="text-black font-bold rounded-full cursor-pointer hover:bg-slate-200 p-2"
              size={30}
            />
          ) : (
            <CiMenuFries
              onClick={() => setShowSideMenus(true)}
              className="text-black font-bold rounded-full cursor-pointer hover:bg-slate-200 p-2"
              size={30}
            />
          )}
        </div>
      </div>

      {/* mobile view */}
      <div className="flex text-xs sm:hidden justify-between items-center p-3">
        <div>
          <img src={logo} alt="logo" className="h-10 w-10" />
          {showSideMenus && (
              <div className="flex w-[85vw] h-full m-auto flex-col gap-2 p-2 absolute bg-white  mt-4 mr-4">
                 <div className="flex flex-col gap-4">
                 <p className="font-bold text-blue-500 text-xs">Upgrade $29 lifetime access</p>

                  {menus.map((menu, index) => (
                    <p className="hover:bg-slate-200 rounded-xl cursor-pointer p-2 " key={index}>
                      {menu}
                    </p>
                  ))}
                </div>
                {sidemenus.map((menu, index) => (
                  <p
                  onClick={menu === "Logout" ? () => onLogout() : undefined}
                  className="hover:bg-slate-200 rounded-xl cursor-pointer p-2"
                    key={index}
                  >
                    {menu}
                  </p>
                ))}
               
              </div>
            )}
        </div>

        <div className="flex justify-center items-center gap-7 ml-4">
          <p className="flex items-center gap-2"><FaRegUser size={24} />{localStorage.getItem("user_name")}</p>
          
            <p>Earnings : $0.00</p>
          

          {showSideMenus ? (
            <IoClose
              onClick={() => setShowSideMenus(false)}
              className="text-black font-bold rounded-full cursor-pointer hover:bg-slate-200 p-2"
              size={40}
            />
          ) : (
            <CiMenuFries
              onClick={() => setShowSideMenus(true)}
              className="text-black font-bold rounded-full cursor-pointer hover:bg-slate-200 p-2"
              size={40}
            />
          )}
        </div>
      </div>
    </>
  );
}
