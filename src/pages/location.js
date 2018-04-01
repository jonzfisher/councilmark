import React from 'react'
import Link from 'gatsby-link'

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

    <img src="http://councilmark.com/images/11235.gif" />

    <p>
      Knoxville <br />
      2607 Kingston Pike, Suite 180 <br />
      Knoxville, TN 37919
    </p>

    <img style={{display:'block'}} src="http://councilmark.com/images/21655.gif" />

    <Link to="/">Go back to the homepage</Link>

  </div>
)

export default LocationPage
