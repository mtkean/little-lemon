import "./BookingForm.css";
import React from "react";
import { useFormik } from 'formik';
import * as Yup from "yup";


function BookingForm(props) {
    function makeOptions(input) {
        const mappedVals = input.map(item => <option value={item} key={item}>{item}</option>);
        return mappedVals;
    }

    function ErrorMessage(message) {
        return (
            <p className="FieldError">{message}</p>
        );
    };
    const minDate = new Date().toISOString().substring(0, 10);
    const minYupDate = new Date();
    const formik = useFormik({
        initialValues: {
            date: '',
            time: props.availableTimes[0],
            guests: 1,
            occasion: 'not-applicable'
        },
        onSubmit: values => {
            props.handleSubmit({ date: values.date, time: values.time, guests: values.guests, occasion: values.occasion })
        },
        validationSchema: Yup.object({
            date: Yup.date().min(minYupDate, 'Date must be for today or later').required('Please select a reservation date'),
            time: Yup.string().required('Please select an available time'),
            guests: Yup.number()
                .min(1, 'Must be a reservation for at least one person')
                .max(10, 'We are unable to create reservations for parties greater than 10')
                .required('Please select the number of people for your reservation'),
            occasion: Yup.string()
        }),
        validateOnBlur: true,
        validateOnChange: true,
    });
    return (
        <div className="bookingForm">
            <h2>Book Now</h2>
            <form style={{ display: "grid", maxWidth: "600px", gap: "20px" }} onSubmit={formik.handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <div className="validatedInput">
                    <input type="date" id="date" name="date" required min={minDate} value={formik.values.date} onBlur={formik.handleBlur}
                        onChange={(e) => {
                            formik.handleChange(e);
                            props.timeDispatcher(e.target.valueAsDate);
                        }} />
                    {formik.touched.date && formik.errors.date ? ErrorMessage(formik.errors.date) : null}
                </div>
                <label htmlFor="res-time">Choose time</label>
                <select
                    id="time"
                    name='time'
                    value={formik.values.time}
                    onChange={formik.handleChange}>
                    {makeOptions(props.availableTimes)}
                </select>
                <label htmlFor="res-guests">Number of guests</label>
                <div className="validatedInput">
                    <input type="number" id="guests" name="guests" min={1} max={10} onChange={formik.handleChange} value={formik.values.guests} onBlur={formik.handleBlur} />
                    {formik.touched.guests && formik.errors.guests ? ErrorMessage(formik.errors.guests) : null}
                </div>
                <label htmlFor="res-occasion">Occasion</label>
                <select id="occasion" name="occasion" required value={formik.values.occasion} onChange={formik.handleChange}>
                    <option value="not-applicable" key="not-applicable">N/A</option>
                    <option value="birthday" key="birthday">Birthday</option>
                    <option value="anniversary" key="anniversary">Anniversary</option>
                </select>
                <input id="submit-reservation" type="submit" value="Make your reservation" />
            </form>
        </div>
    );
}

export default BookingForm;