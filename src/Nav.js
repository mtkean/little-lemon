import { Routes, Route, Link } from "react-router-dom"
import Login from "./Login";
import Order from "./Order";
import Menu from "./Menu";
import Home from "./Home";
import About from "./About";
import Reservations from "./Reservations";

function Nav() {
    return (
        <div>
            <nav>
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/abouts" className="nav-item">About</Link>
                <Link to="/menu" className="nav-item">Menu</Link>
                <Link to="/reservations" className="nav-item">Reservations</Link>
                <Link to="order" className="nav-item">Order</Link>
                <Link to="login" className="nav-item">Login</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/menu" element={<Menu />}></Route>
                <Route path="/reservations" element={<Reservations />}></Route>
                <Route path="/order" element={<Order />}></Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </div>
    );
}

export default Nav;