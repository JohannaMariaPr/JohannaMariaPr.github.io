import SplitHero from '../../components/SplitHero/SplitHero'
import styles from './Home.module.css'
import heroImage from '../../assets/images/portfolio-hero.jpeg'
import aboutImage from '../../assets/images/johanna-prinz.jpg'
import {
LuArrowDown,
LuMapPin
} from "react-icons/lu";
import { NavLink } from 'react-router-dom'

function Home() {
  return (
   <>
    <SplitHero
      image={heroImage}
      imageAlt="View from an airplane over Reykjavík, Iceland"
      location="Reykjavík, Iceland"
    >
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          Designing digital experiences that connect <span className={styles.highlight}>people</span> and <span className={styles.highlight}>places</span>.
        </h1>

        <a href="#projects" className={styles.cta}>
          Explore my work
          <LuArrowDown className={styles.ctaIcon} />
        </a>
      </div>
    </SplitHero>

    <section className={styles.about}>
  <div className={styles.aboutImageWrapper}>
    <img
      src={aboutImage}
      alt="Johanna Prinz"
      className={styles.aboutImage}
    />
  </div>

  <div className={styles.aboutContent}>
    <div className={styles.aboutLocation}>
      <LuMapPin />
      <span>St. Nikola, Austria</span>
    </div>

    <h2>ABOUT ME</h2>

    <p className={styles.aboutQuote}>
      “Every journey is shaped by the places we go and the experiences we collect along the way.”
    </p>

    <p className={styles.aboutText}>
      My own journey and the creative challenges I have taken on have shaped my curiosity about how people experience 
      the digital world. Originally from Austria and now based in Denmark, I bring adaptability and an international 
      perspective to the way I work. 
    </p>
    <p className={styles.aboutText}>
      As a Multimedia Designer with a strong interest in UX/UI design, I enjoy turning research, ideas, and user needs 
      into clear and practical digital solutions. 
    </p>
    <NavLink to="/about" className={styles.aboutLink}>
    More about me
  <span aria-hidden="true">→</span>
  </NavLink>
  </div>

  
</section>

  </>   
  )
}

export default Home