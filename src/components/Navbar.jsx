import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const BASE = import.meta.env.BASE_URL

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navInner}>
        <Link to="/" className={styles.brand}>
          <img
            src={`${BASE}Profile%20Image.png`}
            alt="Praveen Babu"
            className={styles.avatar}
          />
          <div className={styles.brandName}>
            <span>Praveen</span>
            <span>Babu</span>
          </div>
        </Link>
        <div className={styles.links}>
          <NavLink to="/" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
            Home
          </NavLink>
          <a href="#" className={styles.link}>Resume</a>
          <a href="#" className={styles.link}>About</a>
        </div>
      </div>
    </nav>
  )
}
