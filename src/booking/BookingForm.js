import { useState } from "react";


function BookingForm(props) {
    function makeOptions(input) {
        return input.map(item => <option value={item} key={item}>{item}</option>);
    }

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('not-applicable');
    const minDate = new Date().toISOString().substring(0, 10);
    return (
        <div>
            <h2>Book Now</h2>
            <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }} onSubmit={(e) => {
                e.preventDefault();
                props.handleSubmit({date:date, time:time, guests: guests, occasion:occasion})
            }}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" required min={minDate} value={date} onChange={(e) => {
                    setDate(e.target.value);
                    props.timeDispatcher(e.target.valueAsDate);
                }} />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" required value={time} onChange={(e) => {
                    setTime(e.target.value);
                }}>
                    {makeOptions(props.availableTimes)}
                </select>
                <label htmlFor="res-guests">Number of guests</label>
                <input type="number" id="res-guests" required min="1" max="10" value={guests} onChange={(e) => setGuests(e.target.value)} />
                <label htmlFor="res-occasion">Occasion</label>
                <select id="res-occasion" required value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    <option value="not-applicable" key="not-applicable">N/A</option>
                    <option value="birthday" key="birthday">Birthday</option>
                    <option value="anniversary" key="anniversary">Anniversary</option>
                </select>
                <input type="submit" value="Make your reservation" />
            </form>
        </div>
    );
}

export default BookingForm;