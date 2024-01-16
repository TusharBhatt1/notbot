import { useState } from "react";
import { LiaToggleOffSolid } from "react-icons/lia";
import { LiaToggleOnSolid } from "react-icons/lia";
import { CiClock2 } from "react-icons/ci";
import { FiMessageSquare } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function BookingCard({time}:{time:string}) {
    const [on, setOn]=useState(false)
  return (
    <div className=" flex gap-4 flex-col p-4  md:p-7 shadow-xl">
      <div className="flex flex-col gap-4 ">
        <p className="text-2xl">{time} Minutes Meeting</p>
        <div className="text-blue-700 flex justify-between gap-12">
          <p className="font-bold">/{time}-minute-meeting</p>
          <p className="hover:bg-slate-200 cursor-pointer rounded-full px-2">Copy link</p>
        </div>
      </div>
      <div className="border-y  border-slate-300">
        <div className="flex justify-start items-center gap-2 ">
      {on ? <LiaToggleOnSolid className="text-blue-700" onClick={()=>setOn(false)} size={38}/>
      : <LiaToggleOffSolid onClick={()=>setOn(true)} size={38}/>}
     Booking is {on ? "ON" :"OFF"}
      </div>
      <div className="flex justify-start items-center">
      <CiClock2 size={22}/>
      <p>{time} Minutes</p>
      </div>
      </div>
     
      <div className=" border-b border-slate-200 py-4">
        <p>Book a meeting with me for {time} minutes</p>
      </div>
      <div className="flex gap-4 text-slate-500 items-center">
        <p>Share :</p>
        <FiMessageSquare size={28}/>
        <CiMail size={28}/>
        <CiLinkedin size={28}/>
        <FaFacebook size={28}/>
        <FaTwitter size={28}/>
      </div>
      <div className="flex py-3 justify-between border-y border-slate-300 text-slate-500">
        <p>Embeded Website</p>
        <p>Embeded in Email</p>
      </div>
      <div className="flex justify-between items-center ">
        <p className="text-red-500">Delete</p>
        <p className="text-blue-500">Clone</p>
        <p>Edit</p>
      </div>
     
    </div>
  );
}
