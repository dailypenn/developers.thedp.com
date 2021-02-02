import React from 'react'
import s from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

import {
  POPPINS_SEMI_BOLD,
  POPPINS_MEDIUM,
  POPPINS_LIGHT
} from '../styles/fonts'
import { BLUE } from '../styles/constants'
import { Badge } from './badge'

const LatestWorkWrapper = s.div`
  padding: 1rem 1rem;
  padding-left: 15rem;
  margin-right: 10rem;
  margin-bottom: 2rem;

  @media (max-width: 992px) {
    padding: 0 2rem;
    margin-right: 0;
  }
`

const Title = s.h2`
  ${POPPINS_SEMI_BOLD}
  color: ${BLUE};

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`

const ProjectName = s.h2`
  ${POPPINS_MEDIUM}
  margin-top: 1rem;
`

const Divider = s.p`
  border-top: 1px solid rgba(224,224,224,0.5);
  margin: 1.5rem 0;
`

const ProjectDescription = s.p`
  ${POPPINS_LIGHT}
  font-size: 0.9rem;
  width: 80%;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`

const tags = ['React Native', 'Apollo', 'GraphQL']

export const LatestWork = () => {
  const data = useStaticQuery(graphql`
    query {
      screenshot: file(relativePath: { eq: "app-screen.png" }) {
        childImageSharp {
          fluid(maxWidth: 1300) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      logo: file(relativePath: { eq: "dp-plus-black.png" }) {
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
            <Img fluid={logo.childImageSharp.fluid} style={{ width: '60px' }} />
            <ProjectName> DP+ </ProjectName>
            {tags.map(tag => (
              <Badge> {tag} </Badge>
            ))}
            <Divider />
            <ProjectDescription>
              The mobile app that allows you to read stories from all three
              publications at the palm of your hands. You can view the trending
              stories, search articles by keywords, and bookmark your favorites.
            </ProjectDescription>
          </Col>
          <Col md={6}>
            <Img
              fluid={screenshot.childImageSharp.fluid}
              style={{ width: '300px', margin: '0 auto' }}
            />
          </Col>
        </Row>
      </LatestWorkWrapper>
    </>
  )
}
