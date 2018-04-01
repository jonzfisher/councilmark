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
  margin-top: -0.75rem;
`

const BioPage = () => (
  <div>
    <h2>
      Bios
    </h2>

    <SubHeader>
      Daniel W. Pettway - Managing Partner
    </SubHeader>

    <Paragraph>
      Mr. Pettway manages the firm, serves the firm as an analytical specialist in public and private investments, and manages client relationships.
    </Paragraph>

    <Paragraph>
      Prior to founding Councilmark Asset Management in 1999, Mr. Pettway was President of Pettway Petroleum, a regional petroleum distribution and packaging company in Chattanooga, Tennessee.  Mr. Pettway served in that capacity until he and his family sold the company to strategic buyers in the industry.  He founded Highpoint Management Company, a private investment company, in 1996.  Mr. Pettway has extensive experience in financial structure and analysis and has directed and participated in numerous private equity transactions.  Earlier in his career, Mr. Pettway was with First Union Corporation and First Tennessee Bank in their corporate banking divisions.
    </Paragraph>

    <Paragraph>
      Mr. Pettway earned a B.A. in Economics from Vanderbilt University. He has served on numerous non-profit and private boards including most recently as Chairman of the Board of the Chattanooga Christian Community Foundation and Chairman of its Investment Committee, and as a member of the Board of Directors of Capital Bank.  He was also elected to two terms as a member of the City Council of the City of Lookout Mountain.
    </Paragraph>

    <Paragraph>
      You can contact Daniel Pettway at <a href="mailto:dpettway@councilmark.com">dpettway@councilmark.com</a>.
    </Paragraph>

    <SubHeader>
      S. Wayne Erwin, Jr., CFA - Partner and Portfolio Manager
    </SubHeader>

    <Paragraph>
      Mr. Erwin directs portfolio management and investment strategy for the firm.  He has responsibilities in both Equity and Fixed Income strategy and serves as a portfolio manager for client relationships.  Mr. Erwin has extensive experience in equity research and selection.
    </Paragraph>

    <Paragraph>
      Prior to joining Councilmark Asset Management in 2000, Mr. Erwin was Vice President and Portfolio Manager with Martin & Company Investment Counsel located in Knoxville, Tennessee. His responsibilities included Equity Strategy and Balanced Portfolio Management for that firm. Prior to his role as Portfolio Manager, Mr. Erwin was the firm’s Senior Securities Analyst.  Earlier in his career, Mr. Erwin was with Venture Alliance in Knoxville and Merrill Lynch in Richmond, Virginia.
    </Paragraph>

    <Paragraph>
      Mr. Erwin earned a B.A. in Economics from Hampden-Sydney College and an M.B.A. from the University of Tennessee. While at the University, he helped establish and served as President and portfolio manager for the student-managed Clayton Torch Fund, an equity fund established by Jim Clayton of Clayton Homes, Inc.  He has received the professional designation of Chartered Financial Analyst (CFA) from CFA Institute. He has served several charitable and community organizations.
    </Paragraph>

    <Paragraph>
      You can contact Wayne Erwin at <a href="mailto:werwin@councilmark.com">werwin@councilmark.com</a>.
    </Paragraph>

    <SubHeader>
      Ralph W. Herbert - Portfolio Manager
    </SubHeader>

    <Paragraph>
      Mr. Herbert has responsibilities in Fixed Income strategy and serves as a portfolio manager for client relationships. Mr. Herbert has extensive experience in fixed income research and selection.
    </Paragraph>

    <Paragraph>
      Prior to joining Councilmark Asset Management in 2006, Mr. Herbert was a Vice President and Portfolio Manager with Martin & Company Investment Counsel located in Knoxville, Tennessee. His responsibilities included being the Lead Manager of the $106 million First Funds Tennessee Tax Free Portfolio, a proprietary mutual fund of First Tennessee Bank, which Mr. Herbert managed since 1995.  He also co-managed the $322 million First Funds Intermediate Bond Fund since its inception in 1998 and was responsible for Martin & Company's Municipal Bond Strategy Implementation and Asset Selection.  Prior to joining Martin & Company, Mr. Herbert was a vice President and Portfolio Manager with First Tennessee Bank's Trust Division where he managed three Fixed Income Common Trust Funds, the Employee Benefits Fixed Income Fund, the Personal trust Fixed Income Fund, and the Tennessee Tax Exempt Fund.
    </Paragraph>

    <Paragraph>
      Mr. Herbert earned a Bachelor of Science degree from the University of Tennessee. He has served several charitable and community organizations.
    </Paragraph>

    <Paragraph>
      You can contact Ralph Herbert at <a href="mailto:rherbert@councilmark.com">rherbert@councilmark.com</a>.
    </Paragraph>

    <Link to="/">Go back to the homepage</Link>

  </div>
)

export default BioPage
