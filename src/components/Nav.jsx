
import { Link } from "react-router-dom";
import "../styles/Nav.css";

function Nav() {
  return (
    <ul className="navigation">
      <Link to="/"><li>Home</li></Link>
      <Link to="/Board"><li>Board</li></Link>
    </ul>
  );
}

export default Nav;
