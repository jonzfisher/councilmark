import React from 'react'
import Link from 'gatsby-link'
import logo from './images/councilmark_about.gif'

const AboutOurNamePage = () => (
  <div>
    <img src={logo} />
    <p>COUNCIL: <em>a group appointed as an advisory body</em> </p>
    <p>MARK: <em>to plot the course of; chart</em> </p>
    <Link to="/">Back Home</Link>

  </div>
)

export default AboutOurNamePage
