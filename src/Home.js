import "./Home.css";
import DefaultPicture from "./profile/DefaultPicture";

const CallToAction = () => {
    return (
        <div className="call-to-action">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>Little Lemon is a Mediterranean restaurant located in the Boblob Law neighborhood in Chicago. We use the freshest ingredients and pride ourselves in creating an authentic atmosphere</p>
            <img src="./assets/restaurant.jpg" alt="Little Lemon outdoor seating"></img>
        </div>
    )
}
const Specials = () => {
    return (
        <div className="specials">
            <h2>Specials</h2>
            <div className="specialCard">
                <p>Greek salad</p>
                <img src="./assets/greek salad.jpg" alt="Greek salad" />
            </div>
            <div className="specialCard">
                <p>Lemon dessert</p>
                <img src="./assets/lemon dessert.jpg" alt="Lemon desert" />
            </div>
            <div className="specialCard">
                <p>Hot longs</p>
                <img src="./assets/restauranFood.jpg" alt="Hot longs" />
            </div>
        </div>
    )
}

const CusotmersSay = () => {
    return (
        <div className="customers-say">
            <h2>Testimonials</h2>
            <div className="testimonial">
                <DefaultPicture firstName="Frist"/>
                <p>First Reviewer</p>
                <p className="reviewContent">This is the first review</p>
            </div>
            <div className="testimonial">
                <DefaultPicture firstName="Second"/>
                <p>Second Reviewer</p>
                <p className="reviewContent">This is the second review</p>
            </div>
            <div className="testimonial">
                <DefaultPicture firstName="Third"/>
                <p>Third Reviewer</p>
                <p className="reviewContent">This is the third review</p>
            </div>
            <div className="testimonial">
                <DefaultPicture firstName="Fourth"/>
                <p>Fourth Reviewer</p>
                <p className="reviewContent">This is the fourth review</p>
            </div>
        </div>
    )
}

const Chicago = () => {
    return (
        <div className="chicago">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>This is the text that describes the restaurant owners and their story</p>
            <img src="./assets/Mario and Adrian b.jpg" alt="The owners: Adrian and Mario" />
        </div>
    )
}

function Home() {
    return (
        <main className="homepage">
            <CallToAction />
            <Specials />
            <CusotmersSay />
            <Chicago />
        </main>
    );
}

export default Home;