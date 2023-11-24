import { Link } from "react-router-dom";
import logo from './Resources/logo.png';

function Home() {
  return (
    <div className="routing">
      <div className="navbar">
        <nav>
          <div>
            <img src={logo} alt="Logo"></img>
            <h1>Home</h1>
          </div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </div>
  );
}   

export default Home;