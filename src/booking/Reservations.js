import BookingForm from "./BookingForm";
import { useReducer } from 'react';
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../utils/BookingTimeUtil";


export function createInitialTimes(date) {
    return fetchAPI(date);
}

export function timeReducer(state, date) {
    const effectiveDate = date? date : new Date();
    console.log('reducer used');
    return {
        ...state,
        availableTimes: fetchAPI(effectiveDate)
    };
}




function Reservations() {
    const navigate = useNavigate();

    function handleSubmit(formData) {
        if (submitAPI(formData)) {
            navigate("/confirmed-booking")
        }
        else {
            //TODO
        }
    }
    const [state, dispatch] = useReducer(timeReducer, { availableTimes: createInitialTimes(new Date()) });
    return (
        <main className="reservation-page">
            <BookingForm availableTimes={state.availableTimes} timeDispatcher={dispatch} handleSubmit={handleSubmit} />
        </main>
    );
}

export default Reservations;