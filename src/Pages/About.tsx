import { Link } from "react-router-dom";

function About() {
    return (
        <div>
            <h1>About</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default About;