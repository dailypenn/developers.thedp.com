import React from 'react'
import s from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Container, Badge } from '../components'
import { BLUE_PERCENT, RED } from '../styles/constants'
import { POPPINS_BOLD, POPPINS_REGULAR } from '../styles/fonts'

const Wrapper = s.div`
  background-color: ${BLUE_PERCENT(0.04)};
  padding: 3rem 0;
`

const IFrameWrapper = s.div`
  margin: auto;
  width: 60%;

  .iframe {
    height: calc(100% - 59px);
  }
`

const ImgWrapper = s.div`
  background-color: ${RED};
  border-radius: 22px;
  padding: 1rem;
`

const RecruitmentTitle = s.h2`
  ${POPPINS_BOLD}
  font-size: 4rem;
`

const RecruitmentDescription = s.p`
  ${POPPINS_REGULAR}
  margin-top: 2rem;
`

const roles = [
  'Frontend Engineer',
  'Mobile Engineer',
  'Backend Engineer',
  'UI/UX Designers'
]

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
    <Row style={{ margin: '5rem 4rem 5rem 3rem', textAlign: 'center' }}>
      <Col md={6}>
        <RecruitmentTitle> We're Recruiting! </RecruitmentTitle>
        <RecruitmentDescription>
          The DP Tech Department is looking for coders.......
        </RecruitmentDescription>
        {roles.map(role => (
          <Badge> {role} </Badge>
        ))}
      </Col>
      <Col>
        <ImgWrapper>
          <Img fluid={img.childImageSharp.fluid} />
        </ImgWrapper>
      </Col>
    </Row>
  )
}

const Apply = () => (
  <Container>
    <Recruitment />
    <Wrapper>
      <IFrameWrapper>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeduPvGWySAkxCWQwdrvpvSppx2455xjNRh1yi4aCn_lJnQ2Q/viewform"
          width="100%"
          height="600"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        />
      </IFrameWrapper>
    </Wrapper>
  </Container>
)

export default Apply
