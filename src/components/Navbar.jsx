import { useState, useRef, useCallback } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services', subItems: [
    { path: '/services/venturis-tech', label: 'Venturis Tech' },
    { path: '/services/e-commerce-trading', label: 'E-Commerce & Trading' },
    { path: '/services/management', label: 'Management' },
    { path: '/services/consultancy', label: 'Consultancy', subItems: [
      { path: '/services/consultancy/financial-consultancy', label: 'Financial Consultancy' },
      { path: '/services/consultancy/client-consultancy', label: 'Client Consultancy' },
      { path: '/services/consultancy/documentation-consultancy', label: 'Documentation Consultancy' },
      { path: '/services/consultancy/comprehensive-consultancy', label: 'Comprehensive Consultancy' },
      { path: '/services/consultancy/corporate-consultancy', label: 'Corporate Consultancy' },
      { path: '/services/consultancy/mortgage-consultancy', label: 'Mortgage Consultancy' },
    ] },
  ] },
  { path: '/contact', label: 'Contact' },
  { path: '/faq', label: 'FAQ' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [consultancyOpen, setConsultancyOpen] = useState(false)
  const servicesRef = useRef(null)
  const location = useLocation()
  const isServicesActive = location.pathname === '/services' || location.pathname.startsWith('/services/')

  const closeAll = useCallback(() => {
    setOpen(false)
    setServicesOpen(false)
    setConsultancyOpen(false)
  }, [])

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo" onClick={closeAll}>
          <img src="/logo.svg" alt="Venturis Partners" className="navbar-logo-img" />
        </Link>

        <button className={`menu-toggle ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className={`hamburger ${open ? 'active' : ''}`}></span>
        </button>

        <div className={`navbar-menu ${open ? 'open' : ''}`}>
          <ul className="nav-links">
            {navLinks.map(link => (
              <li
                key={link.path}
                className={`nav-item ${link.subItems ? 'has-dropdown' : ''}`}
                ref={link.subItems ? servicesRef : null}
                onMouseEnter={() => link.subItems && setServicesOpen(true)}
                onMouseLeave={() => link.subItems && setServicesOpen(false)}
              >
                {link.subItems ? (
                  <>
                    <button
                      className={`nav-link nav-link-btn ${isServicesActive ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault()
                        setServicesOpen(!servicesOpen)
                      }}
                    >
                      {link.label}
                      <svg className={`nav-caret ${servicesOpen ? 'rotated' : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </button>
                    <ul className={`nav-dropdown ${servicesOpen ? 'open' : ''}`}>
                      {link.subItems.map(sub => (
                        <li key={sub.path} className={`nav-dropdown-item ${sub.subItems ? 'has-submenu' : ''}`}>
                          {sub.subItems ? (
                            <>
                              <div className="nav-dropdown-link nav-dropdown-link--parent">
                                <NavLink
                                  to={sub.path}
                                  className={({ isActive }) => `nav-dropdown-parent-link ${isActive ? 'active' : ''}`}
                                  onClick={closeAll}
                                >
                                  <span className="nav-dropdown-dot"></span>
                                  {sub.label}
                                </NavLink>
                                <button
                                  className="nav-submenu-toggle"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    setConsultancyOpen(!consultancyOpen)
                                  }}
                                  aria-label="Toggle submenu"
                                >
                                  <svg className={`nav-submenu-caret ${consultancyOpen ? 'rotated' : ''}`} width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 6 15 12 9 18"/>
                                  </svg>
                                </button>
                              </div>
                              <ul className={`nav-submenu ${consultancyOpen ? 'open' : ''}`}>
                                {sub.subItems.map(nested => (
                                  <li key={nested.path}>
                                    <NavLink
                                      to={nested.path}
                                      className={({ isActive }) => `nav-dropdown-link ${isActive ? 'active' : ''}`}
                                      onClick={closeAll}
                                    >
                                      <span className="nav-dropdown-dot"></span>
                                      {nested.label}
                                    </NavLink>
                                  </li>
                                ))}
                              </ul>
                            </>
                          ) : (
                            <NavLink
                              to={sub.path}
                              className={({ isActive }) => `nav-dropdown-link ${isActive ? 'active' : ''}`}
                              onClick={closeAll}
                            >
                              <span className="nav-dropdown-dot"></span>
                              {sub.label}
                            </NavLink>
                          )}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    onClick={closeAll}
                  >
                    {link.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn btn-primary nav-cta" onClick={closeAll}>
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  )
}
