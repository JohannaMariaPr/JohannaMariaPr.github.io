import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import {
  LuChevronDown
} from "react-icons/lu";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(false)

  const closeAll = () => {
    setMenuOpen(false)
    setProjectsOpen(false)
  }

  return (
    <header className={styles.header}>
      
      <div className={styles.brand}>
        <span className={styles.name}>Johanna Maria Prinz</span>
        <span className={styles.role}>UX/UI Design · Frontend Development</span>
      </div>
  

      <button
        className={styles.menuButton}
        type="button"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-expanded={menuOpen}
        aria-label="Toggle navigation"
      >
        <span className={styles.menuIcon}>
          {menuOpen ? '✕' : '☰'}
        </span>
      </button>

      <nav
        className={`${styles.nav} ${
          menuOpen ? styles.navOpen : ''
        }`}
        aria-label="Main navigation"
      >
        <NavLink
          to="/"
          onClick={closeAll}
          className={({ isActive }) =>
            isActive ? styles.active : undefined
          }
        >
          Home
        </NavLink>

        <span className={styles.separator}>|</span>

        <NavLink
          to="/about"
          onClick={closeAll}
          className={({ isActive }) =>
            isActive ? styles.active : undefined
          }
        >
          About Me
        </NavLink>

        <span className={styles.separator}>|</span>

        <div className={styles.dropdown}>
          <button
            type="button"
            className={styles.dropdownButton}
            onClick={() =>
              setProjectsOpen((prev) => !prev)
            }
            aria-expanded={projectsOpen}
            aria-haspopup="true"
          >
            Projects
            <span
              className={`${styles.chevron} ${
                projectsOpen ? styles.chevronOpen : ''
              }`}
              aria-hidden="true"
            >
              <LuChevronDown />
            </span>
          </button>

          {projectsOpen && (
            <div className={styles.dropdownMenu}>
              <NavLink
                to="/projects/bla-sol"
                onClick={closeAll}
              >
                <span>Blå Sol Festival</span>
                <small>Randers, Denmark</small>
              </NavLink>

              <NavLink
                to="/projects/hidden-places"
                onClick={closeAll}
              >
                <span>Hidden Places</span>
                <small>Vienna, Austria</small>
              </NavLink>

              <NavLink
                to="/projects/spilcafeen"
                onClick={closeAll}
              >
                <span>Spilcaféen</span>
                <small>Aarhus, Denmark</small>
              </NavLink>
            </div>
          )}
        </div>

        <span className={styles.separator}>|</span>

        <NavLink
          to="/contact"
          onClick={closeAll}
          className={({ isActive }) =>
            isActive ? styles.active : undefined
          }
        >
          Contact
        </NavLink>

        <span className={styles.separator}>|</span>

        <button
          type="button"
          className={styles.dropdownButton}
          aria-label="Select language"
        >
          EN
          <span className={styles.chevron} aria-hidden="true"><LuChevronDown /></span>
        </button>
      </nav>
    </header>
  )
}

export default Header