import { Link, NavLink } from "react-router-dom"
import Logo from "./Logo"
import styles from "./Navbar.module.css"

function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link to="/dash">
        {" "}
        <Logo />{" "}
      </Link>
      <ul>
        <li className="cta">
          <NavLink to="/">Logout</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
