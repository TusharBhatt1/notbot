import BookingHeader from "./BookingHeader";
import BookingOptions from "./BookingOptions";

export default function Booking() {
  return (
    <div className="flex gap-7 flex-col p-4 md:px-28 md:py-24 ">
       <BookingHeader/>
       <BookingOptions/>
    </div>
  )
}
