import blaSolImage from '../assets/images/project-card-bla-sol.png'
import hiddenPlacesImage from '../assets/images/project-card-hidden-places.png'
import spilcafeenImage from '../assets/images/project-card-spilcafeen.png'

export const projects = [
  {
    id: 'bla-sol',
    number: '01',
    title: 'Blå Sol Festival',
    location: 'Randers, Denmark',
    image: blaSolImage,

    description:
      'A digital festival experience that helps visitors discover more than just the music lineup.',

    tags: [
      'UX Research',
      'UX/UI Design',
      'React'
    ],

    path: '/projects/bla-sol'
  },

  {
    id: 'hidden-places',
    number: '02',
    title: 'Hidden Places',
    location: 'Vienna, Austria',
    image: hiddenPlacesImage,

    description:
      'A cultural discovery website that makes it easier for visitors to explore lesser-known museums, exhibitions, and hidden gems in Vienna.',

    tags: [
      'UX Research',
      'UX/UI Design',
      'HTML/CSS'
    ],

    path: '/projects/hidden-places'
  },

  {
    id: 'spilcafeen',
    number: '03',
    title: 'Spilcaféen',
    location: 'Aarhus, Denmark',
    image: spilcafeenImage,

    description:
      'A digital game library designed to help visitors discover new board games, with a separate React CRUD interface to manage the collection.',

    tags: [
      'UX/UI Design',
      'React',
      'CRUD'
    ],

    path: '/projects/spilcafeen'
  }
]