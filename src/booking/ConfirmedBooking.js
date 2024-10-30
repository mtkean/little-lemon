import { useNavigate } from "react-router-dom";

function ConfirmedBooking() {
    const navigate = useNavigate();
    function goToHome() {
        navigate("/");
    }
    return (
        <main id="confirmed-booking">
            <h3>Reservation Confirmed!</h3>
            <text>Check your email for details.</text>
            <text>Something about changing or cancelling</text>
            <button onClick={goToHome}>Accept</button>
        </main>
    );
}

export default ConfirmedBooking;