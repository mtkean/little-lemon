import { Link } from "react-router-dom"

function Nav() {
    return (
        <>
            <nav>
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/abouts" className="nav-item">About</Link>
                <Link to="/menu" className="nav-item">Menu</Link>
                <Link to="/reservations" className="nav-item">Reservations</Link>
                <Link to="order" className="nav-item">Order</Link>
                <Link to="login" className="nav-item">Login</Link>
            </nav>
        </>
    );
}

export default Nav;