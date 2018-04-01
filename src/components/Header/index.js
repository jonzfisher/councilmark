import React from 'react'
import Link from 'gatsby-link'
import banner from './banner.gif'

const Header = () => (
  <div
    style={{
      background: 'white',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        width: '100%', 
        padding: '1.5rem 0.5rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
	    display: 'block',
            margin: 0,
	    padding: 0,
	    height: '68px',
          }}
        >
          <img src={banner} /> 
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
