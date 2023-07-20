import { Link } from "react-router-dom";
import Me from "../assets/Me.png";
import "../pages/Home.css";

function Mainh() {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>I'm an ex energy engineer</h4>
          <h1>...newBie dev</h1>
          <p>Conjuring code as a full-stack JS dev newbie! 🧙‍♂️</p>
          <Link to="/about" className="btn lg">
            About Me
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle" />
          <div className="main__header-image">
            <img src={Me} alt="Me" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Mainh;
