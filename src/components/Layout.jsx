import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import AnnouncementBar from './AnnouncementBar'
import './Layout.css'

export default function Layout() {
  return (
    <>
      <div className="site-header">
        <AnnouncementBar />
        <Navbar />
      </div>
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
