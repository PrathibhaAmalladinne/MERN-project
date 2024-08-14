import { NavLink } from "react-router-dom"
import styles from "./SideBar.module.css"
function SideBar() {
  return (
    <main className={styles.sidebar}>
      <ul>
        <li>
          <NavLink to="/dash/notes">Tech Notes</NavLink>
        </li>
        <li>
          <NavLink to="/dash/notes/new">Add a new note</NavLink>
        </li>
        <li>
          <NavLink to="/dash/users">User Settings</NavLink>
        </li>
        <li>
          <NavLink to="/dash/users/new">Add a new user</NavLink>
        </li>
      </ul>
    </main>
  )
}

export default SideBar
