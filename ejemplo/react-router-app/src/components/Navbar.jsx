import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/Edilene">Edilene</Link></li>
        <li><Link to="/Janersy">Janersy</Link></li>
        <li><Link to="/Edgar">Edgar</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

