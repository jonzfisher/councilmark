import React from 'react'
import Link from 'gatsby-link'
import chattanooga_location from './images/chattanooga.gif'
import knoxville_location from './images/knoxville.gif'

const LocationPage = () => (
  <div>
    <h2>
      Locations
    </h2>

    <p>
      Chattanooga <br />
      736 Georgia Ave, Suite 401 <br />
      Chattanooga, TN 37402
    </p>

    <img src={chattanooga_location} />

    <p>
      Knoxville <br />
      2607 Kingston Pike, Suite 180 <br />
      Knoxville, TN 37919
    </p>

    <img style={{display:'block'}} src={knoxville_location} />

    <Link to="/">Go back to the homepage</Link>

  </div>
)

export default LocationPage
