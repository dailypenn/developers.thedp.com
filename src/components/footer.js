import React from 'react'
import s from 'styled-components'
import { Row, Col } from 'react-bootstrap'

import { POPPINS_REGULAR } from '../styles/fonts'
import { StyledLink, URL } from './typography'

const FooterText = s.p`
  ${POPPINS_REGULAR}
  font-size: 80%;
`

const LeftSections = [
  {
    title: 'Home',
    link: '/'
  },
  {
    title: 'Team',
    link: '/team'
  },
  {
    title: 'Products',
    link: '/products'
  }
]

const RightSections = [
  {
    title: 'Projects @ The DP',
    link: 'https://projects.thedp.com/'
  },
  {
    title: 'The Daily Pennsylvanian',
    link: 'https://www.thedp.com/'
  },
  {
    title: '34th Street Magazine',
    link: 'https://www.34st.com/'
  },
  {
    title: 'Under the Button',
    link: 'https://www.underthebutton.com/'
  }
]

const StyledRow = s(Row)`
  padding: 3rem 3rem;
  background-color: rgba(224, 224, 224, 0.25);
`

const LeftCol = s(Col)`
  border-right: 1px solid rgba(224,224,224,0.5);

  @media screen and (max-width: 768px) {
    border-right: none;
    border-bottom: 1px solid rgba(224,224,224,0.5);
    margin-bottom: 1rem;
  }
`

const RightCol = s(Col)`
  margin-left: 2rem;

  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`

const ApplyButton = s.div`
  background-color: #19BAFD;
  ${POPPINS_REGULAR}
  border-radius: 6px;
  width: 5rem;
  text-alignment: center;
  padding: 0.2rem 1rem;
  color: white;
`

const ColWithMargin = s(Col)`
  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
  }
`

const FooterLogo = s.img`
  position: absolute;
  right: -10px;
  bottom: -25px;
  height: 50px;
`

export const Footer = () => (
  <StyledRow>
    <ColWithMargin md={6}>
      <FooterText>
        Made with 💖 by the DP Tech Department <br /> &copy; The Daily
        Pennsylvanian 2021
      </FooterText>
      <StyledLink to="/apply">
        <ApplyButton> APPLY </ApplyButton>
      </StyledLink>
    </ColWithMargin>
    <Col md={6}>
      <Row>
        <LeftCol md={4}>
          {LeftSections.map(({ title, link }) => (
            <URL link={link}>
              <FooterText> {title} </FooterText>
            </URL>
          ))}
        </LeftCol>
        <RightCol>
          {RightSections.map(({ title, link }) => (
            <URL link={link}>
              <FooterText> {title} </FooterText>
            </URL>
          ))}
        </RightCol>
        <FooterLogo src="/logo-cube.png" />
      </Row>
    </Col>
  </StyledRow>
)
