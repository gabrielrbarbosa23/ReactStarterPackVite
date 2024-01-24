import { Link } from "react-router-dom";
import "../styles/navbar.css";


function Navbar() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/Page1'>Page1</Link>
      <Link to='/Page2'>Page2</Link>
    </nav>
  )
}

export default Navbar