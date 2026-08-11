import { FaLinkedinIn, FaGithub } from 'react-icons/fa6'
import { LuMail, LuArrowUp } from 'react-icons/lu'

import styles from './Footer.module.css'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        © Johanna Maria Prinz 2026
      </p>

      <div className={styles.socials}>
        <a
          href="https://www.linkedin.com/in/johanna-prinz-55a628257"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className={styles.iconButton}
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://github.com/JohannaMariaPr"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className={styles.iconButton}
        >
          <FaGithub />
        </a>

        <a
          href="mailto:johannaprinz@gmx.at"
          aria-label="Email"
          className={styles.iconButton}
        >
          <LuMail />
        </a>
      </div>

      <button
        type="button"
        onClick={scrollToTop}
        className={styles.topButton}
      >
        Back to top
        <LuArrowUp />
      </button>
    </footer>
  )
}

export default Footer