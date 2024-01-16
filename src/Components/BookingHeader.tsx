import { CiCircleQuestion } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";

export default function BookingHeader() {
    return (
        <div>
       <div className="flex flex-col md:flex-row justify-center items-center text-center gap-4 md:gap-28">
        <div className="flex flex-col md:flex-row justify-center gap-4 items-center">
        <p className="text-3xl">Booking Types</p>
        <button className="p-3 w-auto border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white">
          + Create new booking type
        </button>
       
        </div>
        <div className="flex flex-col md:flex-row gap-8  justify-center items-center">
        <button className="p-1 w-auto hover:bg-slate-700 hover:text-white flex justify-center items-center ">
          <p>Embedded booking page</p> <span><CiCircleQuestion size={28} /></span>
        </button>
       
       
        <button className="p-2 w-auto hover:bg-slate-700  hover:text-white flex justify-center items-center">
          <p>View bookings page</p> <GoArrowUpRight size={28} />
        </button>
        </div>
       </div>
       </div>
    )
    }