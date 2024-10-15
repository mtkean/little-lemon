
function Footer() {
    return (
        <footer>
            <div className="doormat navigation">
                <label>Doormat Navigation</label>
                <ul>
                    <li key="home"><a href="home">Home</a></li>
                    <li key="about"><a href="about">About</a></li>
                    <li key="menu"><a href="menu">Menu</a></li>
                    <li key="reservations"><a href="reservations">Reservations</a></li>
                    <li key="order"><a href="order">Order Online</a></li>
                    <li key="login"><a href="login">Login</a></li>
                </ul>
            </div>
            <div className="contact">
                <label>Contact Us</label>
            </div>
            <div className="social">
                <label>Social Links</label>
            </div>
        </footer>
    );
}

export default Footer;