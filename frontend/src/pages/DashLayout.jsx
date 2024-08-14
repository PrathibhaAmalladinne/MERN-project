import styles from "./DashLayout.module.css"
import Navbar from "../components/Navbar"
import SideBar from "../components/SideBar"
import { Outlet } from "react-router-dom"
function DashLayout() {
  return (
    <main className={styles.app}>
      <Navbar />
      <SideBar />
      <Outlet />
    </main>
  )
}

export default DashLayout
