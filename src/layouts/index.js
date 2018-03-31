import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Councilmark Asset Management, LLC"
      meta={[
        { name: 'description', content: '' },
        { name: 'keywords', content: 'asset management, investments, retirement planning, wealth managemente, estate planning, trust services, tax planning, risk management, business services' },
      ]}
    />
    <Header />
    <div
     style={{
       display: 'flex',
       flexWrap: 'nowrap',
       justifyContent: 'flex-start',
       width: '100%',
       backgroundColor: '#ffffcc',
       height: '100vh',
     }}
    >
      <nav className="side">
        <Link to="/welcome">Welcome</Link>
        <Link to="/aboutOurName">About Our Name</Link>
        <Link to="/firmProfile">Firm Profile</Link>
        <Link to="/services">Services</Link>
        <Link to="/bio">Bios</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/location">Locations</Link>
      </nav>
      <div
      	style={{
      	display: 'flex',
        justifyContent: 'stretch',
      	float: 'left',
        width: '100%',
      	padding: '1.5rem',
      }}
      >

        {children()}
      </div>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
