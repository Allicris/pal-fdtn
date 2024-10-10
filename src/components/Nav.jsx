
import { Link } from "react-router-dom";
import "../styles/Nav.css";
import home from "../../public/icons/home.png";
import board from "../../public/icons/board.png";

function Nav() {
  return (
    <div className="navigation">
      <Link to="/">
      <img src={home}></img>
      <p>Home</p>
      </Link>
      <Link to="/Board">
      <img src={board}></img>
      <p>Board</p></Link>
    </div>
  );
}

export default Nav;
