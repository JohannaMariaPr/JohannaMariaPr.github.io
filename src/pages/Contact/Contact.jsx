import { LuMail, LuPhone, LuMapPin, LuArrowUpRight } from 'react-icons/lu'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa6'

import styles from './Contact.module.css'

function Contact() {
  return (
    <main className={styles.contactPage}>
      <section className={styles.contact}>
        <div className={styles.intro}>
          <h1>
            Have a project, opportunity,
            or just want to say hi?
          </h1>

          <p className={styles.introText}>
            I'm currently open to internship opportunities and student jobs.
          </p>

          <p className={styles.availability}>
            Let's connect!
          </p>
        </div>

        <div className={styles.contactDetails}>
          <div className={styles.contactItem}>
            <div className={styles.label}>
              <LuMail />
              <span>Email</span>
            </div>

            <a href="mailto:YOUR-EMAIL">
              johannaprinz@gmx.at
            </a>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.label}>
              <LuPhone />
              <span>Phone</span>
            </div>

            <a href="tel:YOUR-PHONE-NUMBER">
              +45 22 66 65 40
            </a>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.label}>
              <FaLinkedinIn />
              <span>LinkedIn</span>
            </div>

            <a
              href="https://www.linkedin.com/in/johanna-prinz-55a628257"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn
              <LuArrowUpRight />
            </a>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.label}>
              <FaGithub />
              <span>GitHub</span>
            </div>

            <a
              href="https://github.com/JohannaMariaPr"
              target="_blank"
              rel="noreferrer"
            >
              View my GitHub
              <LuArrowUpRight />
            </a>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.label}>
              <LuMapPin />
              <span>Based in</span>
            </div>

            <p>
              Aarhus, Denmark
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact