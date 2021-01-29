import React from 'react'
import s from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Row, Col } from 'react-bootstrap'

import { Container, LatestWork } from '../components'
import {
  POPPINS_BOLD,
  POPPINS_REGULAR,
  POPPINS_SEMI_BOLD
} from '../styles/fonts'

const Hero = s.div`
  background: linear-gradient(#FB7264, #19BAFD);
  text-align: center;
  color: white;
  ${POPPINS_REGULAR}
  padding-top: 3rem;
  padding-bottom: 1rem;
`

const HelloWorld = s.h1`
  ${POPPINS_BOLD}
  font-size: 6rem;
`

const SubHead = s.p`
  margin-top: 5rem;
  font-size: 90%;
`

const Checkout = s.p`
  ${POPPINS_BOLD}
  margin-top: 2rem;
`

const RecruitmentRow = s(Row)`
  padding: 1rem 3rem;
  background-color: #FB7264;
  border-radius: 22px;
`

const Recruitment = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "web-building.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const img = data.file

  return (
    <RecruitmentRow style={{ margin: '2rem 2rem' }}>
      <Col md={6}></Col>
      <Col>
        <Img fluid={img.childImageSharp.fluid} />
      </Col>
    </RecruitmentRow>
  )
}

const Index = () => {
  return (
    <Container>
      <Hero>
        <span role="emoji" style={{ fontSize: '4rem' }}>
          {' '}
          👋{' '}
        </span>
        <HelloWorld> Hello world. </HelloWorld>
        <p style={{ fontSize: '2.5rem' }}>We're the DP Tech Dept</p>
        <SubHead>
          We power everything digital by The Daily Pennsylvanian, <br /> Penn's
          independent, student-run newspaper.
        </SubHead>
        <Checkout> Check out our featured projects </Checkout>
      </Hero>
      <LatestWork />
      <Recruitment />
    </Container>
  )
}

export default Index
