import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import { Outlet, useLocation } from 'react-router-dom'

function Layout() {
  const location = useLocation()

  const isHome = location.pathname === '/'

  return (
    <>
      <Header overlay={isHome} />

      <Outlet />

      <Footer />
    </>
  )
}

export default Layout