import BookingHeader from "./BookingHeader";
import BookingOptions from "./BookingOptions";

export default function Booking() {
  return (
    <div className="flex gap-4 flex-col p-4 md:p-12 ">
       <BookingHeader/>
       <BookingOptions/>
    </div>
  )
}
