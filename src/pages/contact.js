import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const StyledLabel = styled.p`
  margin-bottom: 0;
`

const ContactPage = () => (
  <div>
    <h2>Contact Us</h2>
    <form name="contact" method="POST" action="/thankyou" data-netlify="true">
      <p>
        <label>
          <StyledLabel>Name:</StyledLabel>
          <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          <StyledLabel>Email:</StyledLabel>
          <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          <StyledLabel>Message:</StyledLabel>
          <textarea name="message"></textarea>
        </label>
      </p>
      <p>
        <button type="submit">
          Send
        </button>
      </p>
    </form>
    <Link to="/">
      Go back to the homepage
    </Link>

  </div>
)

export default ContactPage
