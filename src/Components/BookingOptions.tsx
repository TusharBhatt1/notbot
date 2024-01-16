import { useState } from "react";
import BookingCard from "./BookingCard";
import { BsFillChatFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

export default function BookingOptions() {
  const [showMsg, setShowMsg] = useState(true);
  return (
    <div className="flex flex-wrap flex-col md:flex-row justify-center gap-7 items-center">
      <BookingCard time={"15"} />
      <BookingCard time={"45"} />
      <BookingCard time={"60"} />
      <div className=" hidden md:flex fixed right-10 bottom-10 flex-col gap-2 items-end">
        {showMsg && (
          <div className="relative bg-white border border-black rounded-xl px-7 py-4">
            <p>
              Hi there.👋 Do you need help ? <br />
              <span className="text-slate-400 mt-2 text-sm">
                {" "}
                mail : tusharbhatt0135@gmail.com
              </span>
            </p>
            <p
              onClick={() => setShowMsg(false)}
              className="absolute right-1 top-1 bg-slate-200 cursor-pointer rounded-full"
            >
              <IoClose size={18} />
            </p>
          </div>
        )}
        <div
          onClick={() => setShowMsg(true)}
          className="text-white p-2 bg-blue-600 rounded-full"
        >
          <BsFillChatFill size={32} />
        </div>
      </div>
    </div>
  );
}
