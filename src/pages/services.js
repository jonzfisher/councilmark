import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const SubHeader = styled.h2`
  font-size: 1.25rem;
  font-style: italic;
  color: rgba(0,0,0, .66);
`;

const Paragraph = styled.p`
  display: block;
  margin-top: -1.25rem;
`


const ServicesPage = () => (
  <div>
    <h2>Services</h2>
    <div>

        <SubHeader>Investments</SubHeader>
        <Paragraph>
          Comprehensive data and research.
        </Paragraph>

        <SubHeader>Asset Management</SubHeader>
        <Paragraph>
          Management, service, and reporting for individuals and families;
          taxable and tax-exempt organizations.
        </Paragraph>

        <SubHeader>Retirement Planning</SubHeader>
        <Paragraph>
          Prudent planning for a client's retirement needs.
        </Paragraph>

        <SubHeader>Wealth Management</SubHeader>
        <Paragraph>
          Inherited or sudden wealth presents its own set of issues, all
          needing intensive attention and management.
        </Paragraph>

    </div>
    <h2>Referral Network</h2>
    <Paragraph>
      Our in-house expertise working with the most respected outside
      specialists.
    </Paragraph>
    <div>
      <SubHeader>Estate Planning</SubHeader>
      <Paragraph>
        Accumulated wealth will pass on to heirs with certain tax
        consequences. Structuring an estate plan to retain assets for those
        intended to inherit them is essential.
      </Paragraph>

      <SubHeader>Trust Services</SubHeader>
      <Paragraph>
        Creative trust design can protect assets and properly direct them to the
        intended recipient.
      </Paragraph>

      <SubHeader>Tax Planning</SubHeader>
      <Paragraph>
        Taxes - how to best mitigate their impact.
      </Paragraph>

      <SubHeader>Risk Management</SubHeader>
      <Paragraph>
        Insurance can be a useful element in the successful execution of a
        solid plan.
      </Paragraph>

      <SubHeader>Business Services</SubHeader>
      <Paragraph>
        Succession planning; strategic financing; advice for the independent
        business owner or partner.
      </Paragraph>
    </div>


    <Link to="/">Go back to the homepage</Link>

  </div>
)

export default ServicesPage
