import { NavLink } from 'react-router-dom'
import { LuArrowRight } from 'react-icons/lu'

import ctaImage from '../../assets/images/cta-section.jpeg'
import stampNextImage from '../../assets/icons/stamp-next.png'

import styles from './CTASection.module.css'

function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.visual}>
        <img
          src={stampNextImage}
          alt=""
          aria-hidden="true"
          className={styles.stamp}
        />

        <img
          src={ctaImage}
          alt=""
          className={styles.photo}
        />
      </div>

      <div className={styles.content}>
        <h2>
          Let's bring our ideas and journeys together!
        </h2>

        <p>
          I'm looking forward to taking on new projects and challenges.
        </p>
      </div>

      <NavLink
        to="/contact"
        className={styles.button}
      >
        Get in touch
        <LuArrowRight />
      </NavLink>
    </section>
  )
}

export default CTASection