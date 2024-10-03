import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/Nosotros">Nosotros</Link></li>
        <li><Link to="/Edilene">Edilene</Link></li>
        <li><Link to="/Janersy">Janersy</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

