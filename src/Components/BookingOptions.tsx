import BookingCard from './BookingCard'

export default function BookingOptions() {
  return (
    <div className='flex flex-wrap flex-col md:flex-row justify-center gap-7 items-center'>
        <BookingCard time={'15'}/>
        <BookingCard time={'45'}/>
        <BookingCard time={'60'}/>
    </div>
  )
}
