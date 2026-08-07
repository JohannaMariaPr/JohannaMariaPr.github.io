import styles from './SplitHero.module.css'

function SplitHero({
  children,
  image,
  imageAlt = '',
  location,
}) {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        {children}
      </div>

      <div className={styles.imageSide}>
        <img
          src={image}
          alt={imageAlt}
          className={styles.image}
        />

        <div className={styles.fade} />

        {location && (
          <div className={styles.location}>
            {location}
          </div>
        )}
      </div>
    </section>
  )
}

export default SplitHero