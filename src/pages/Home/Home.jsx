import SplitHero from '../../components/SplitHero/SplitHero'
import styles from './Home.module.css'
import heroImage from '../../assets/images/portfolio-hero.jpeg'

function Home() {
  return (
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
        </a>
      </div>
    </SplitHero>
  )
}

export default Home