import BookingHeader from "./BookingHeader";
import BookingOptions from "./BookingOptions";

export default function Booking() {
  return (
    <div className="flex gap-12 flex-col py-14 md:py-24 ">
       <BookingHeader/>
       <BookingOptions/>
    </div>
  )
}
