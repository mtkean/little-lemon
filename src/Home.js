
const CallToAction = () => {
    return (
        <div className="call-to-action">
            <h1>Little Lemon</h1>
        </div>
    )
}
const Specials = () => {
    return (
        <div className="specials">
            <h2>Specials</h2>
        </div>
    )
}

const CusotmersSay = () => {
    return (
        <div className="customers-say">
            <h4>Testimonials</h4>
        </div>
    )
}

const Chicago = () => {
    return (
        <div className="chicago">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
        </div>
    )
}

function Home() {
    return (
        <div className="homepage">
            <CallToAction />
            <Specials />
            <CusotmersSay />
            <Chicago />
        </div>
    );
}

export default Home;