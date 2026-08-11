import { useState } from 'react'
import {
  LuChevronLeft,
  LuChevronRight,
} from 'react-icons/lu'

import { projects } from '../../data/projects'
import ProjectCard from '../ProjectCard/ProjectCard'
import styles from './ProjectCarousel.module.css'

function ProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const previousIndex =
    (activeIndex - 1 + projects.length) % projects.length

  const nextIndex =
    (activeIndex + 1) % projects.length

  const visibleProjects = [
    projects[previousIndex],
    projects[activeIndex],
    projects[nextIndex],
  ]

  const showPrevious = () => {
    setActiveIndex(
      (prev) => (prev - 1 + projects.length) % projects.length
    )
  }

  const showNext = () => {
    setActiveIndex(
      (prev) => (prev + 1) % projects.length
    )
  }

  const handleCardClick = (index) => {
    if (index === 0) {
      showPrevious()
    }

    if (index === 2) {
      showNext()
    }
  }

  const handleCardKeyDown = (event, index) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleCardClick(index)
    }
  }

  return (
    <div className={styles.carouselWrapper}>
      <button
        type="button"
        className={`${styles.carouselButton} ${styles.previousButton}`}
        onClick={showPrevious}
        aria-label="Show previous project"
      >
        <LuChevronLeft />
      </button>

      <div className={styles.carousel}>
        {visibleProjects.map((project, index) => {
          const isFeatured = index === 1

          return (
            <div
              key={project.id}
              className={`${styles.cardWrapper} ${
                !isFeatured ? styles.clickableCard : ''
              }`}
              onClick={
                !isFeatured
                  ? () => handleCardClick(index)
                  : undefined
              }
              onKeyDown={
                !isFeatured
                  ? (event) => handleCardKeyDown(event, index)
                  : undefined
              }
              role={!isFeatured ? 'button' : undefined}
              tabIndex={!isFeatured ? 0 : undefined}
              aria-label={
                !isFeatured
                  ? `Show ${project.title}`
                  : undefined
              }
            >
              <ProjectCard
                project={project}
                featured={isFeatured}
              />
            </div>
          )
        })}
      </div>

      <button
        type="button"
        className={`${styles.carouselButton} ${styles.nextButton}`}
        onClick={showNext}
        aria-label="Show next project"
      >
        <LuChevronRight />
      </button>
    </div>
  )
}

export default ProjectCarousel