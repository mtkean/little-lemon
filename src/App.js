import './App.css';
import { Routes, Route } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';

import Login from "./Login";
import Order from "./Order";
import Menu from "./Menu";
import Home from "./Home";
import About from "./About";
import Reservations from "./Reservations";
import ConfirmedBooking from './ConfirmedBooking';

function App() {
  return (
    <div className='application'>
      <Header />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/reservations" element={<Reservations />}></Route>
        <Route path="/confirmed-booking" element={<ConfirmedBooking />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;