import React from 'react'
import s from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

import { POPPINS_SEMI_BOLD, POPPINS_MEDIUM } from '../styles/fonts'
import { BLUE } from '../styles/constants'
import { Badge } from './badge'

const LatestWorkWrapper = s.div`
  padding: 1rem 1rem;
  padding-left: 15rem;
  margin-right: 5rem;

  @media (max-width: 992px) {
    padding-left: 2rem;
  }
`

const Title = s.h2`
  ${POPPINS_SEMI_BOLD}
  color: ${BLUE};
`

const ProjectName = s.h2`
  ${POPPINS_MEDIUM}
  margin-top: 2rem;
`

const tags = ['React Native', 'Apollo', 'GraphQL']

export const LatestWork = () => {
  const data = useStaticQuery(graphql`
    query {
      screenshot: file(relativePath: { eq: "web-building.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      logo: file(relativePath: { eq: "DP+.png" }) {
        childImageSharp {
          fluid(maxHeight: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { screenshot, logo } = data

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <Title> Latest Work </Title>
      </div>
      <LatestWorkWrapper>
        <Row>
          <Col md={6}>
            <Img fluid={logo.childImageSharp.fluid} style={{ width: '50px' }} />
            <ProjectName> DP+ </ProjectName>
            {tags.map(tag => <Badge> {tag} </Badge>)}
          </Col>
          <Col md={6}>
            <Img fluid={screenshot.childImageSharp.fluid} />
          </Col>
        </Row>
      </LatestWorkWrapper>
    </>
  )
}
