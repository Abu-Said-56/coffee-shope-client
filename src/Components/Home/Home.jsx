import App from "../../App";
import ShowElement from "../ShowElement/ShowElement";

const Home = () => {
    return (
        <div>
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: "url(https://i.ibb.co.com/6rBTR0Y/3.png)",
            }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
            <App></App>
            
        </div>
    );
};

export default Home;