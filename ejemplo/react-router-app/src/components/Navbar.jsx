import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/Nosotros">Nosotros</Link></li>
        <li><Link to="/Edilene">Edilene</Link></li>
        <li><Link to="/Janersy">Janersy</Link></li>
        <li><Link to="/Jonna">Jonna</Link></li>
        <li><Link to="/Kevin">Kevin</Link></li>
        <li><Link to="/Gael">Gael</Link></li>
        <li><Link to="/Manuel">Manuel</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

