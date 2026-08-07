import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './styles/variables.css'
import './styles/global.css'

import Layout from './layout/Layout.jsx'



import './styles/variables.css'
import './styles/global.css'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import BlaSol from './pages/BlaSol/BlaSol.jsx'
import HiddenPlaces from './pages/HiddenPlaces/HiddenPlaces.jsx'
import Spilcafeen from './pages/Spilcafeen/Spilcafeen.jsx'
import Contact from './pages/Contact/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'projects/bla-sol',
        element: <BlaSol  />
      },
      {
        path: 'projects/hidden-places',
        element: <HiddenPlaces />,
      },
      {
        path: 'projects/spilcafeen',
        element: <Spilcafeen />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
