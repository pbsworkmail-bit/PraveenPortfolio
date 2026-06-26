import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navInner}>
        <Link to="/" className={styles.brand}>
          <div className={styles.avatar}>PB</div>
          <span className={styles.brandName}>Praveen Babu</span>
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
