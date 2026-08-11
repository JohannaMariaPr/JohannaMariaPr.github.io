import { NavLink } from 'react-router-dom'
import { LuMapPin } from 'react-icons/lu'
import styles from './ProjectCard.module.css'

function ProjectCard({ project, featured = false }) {
  return (
    <article
      className={`${styles.card} ${
        featured ? styles.featured : ''
      }`}
    >
      <span className={styles.number}>
        {project.number}
      </span>

      <img
        src={project.image}
        alt=""
        className={styles.image}
      />

      <div className={styles.content}>
        <div className={styles.location}>
          <LuMapPin />
          <span>{project.location}</span>
        </div>

        <h3>{project.title}</h3>

        <p className={styles.description}>
          {project.description}
        </p>

        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <NavLink
          to={project.path}
          className={styles.detailsLink}
        >
          See details
          <span aria-hidden="true">→</span>
        </NavLink>
      </div>
    </article>
  )
}

export default ProjectCard