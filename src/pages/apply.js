import React from 'react'
import s from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import {
  Container,
  Badge,
  PageTitle,
  PageDescription,
  Chevron,
  StyledLink,
  StyledAnchor
} from '../components'
import { BLUE_PERCENT, RED, BLUE, WHITE } from '../styles/constants'
import { POPPINS_BOLD } from '../styles/fonts'

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

  @media (max-width: 768px) {
    width: 90%;
  }
`

const ImgWrapper = s.div`
  background-color: ${RED};
  border-radius: 22px;
  padding: 1rem;

  @media (max-width: 992px) {
    margin-top: 2rem;
  }
`

const roles = [
  'Frontend Engineer',
  'Mobile Engineer',
  'Backend Engineer',
  'UI/UX Designers'
]

const StyledRow = s(Row)`
  margin: 5rem 0;
  padding-left: 5rem;
  padding-right: 3rem;
  text-align: center;

  @media (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

const ApplyHere = s.span`
  ${POPPINS_BOLD}
  color: ${RED};
  margin-left: 0.3rem;
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
    <StyledRow>
      <Col lg={6}>
        <PageTitle> We're Recruiting! </PageTitle>
        <PageDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </PageDescription>
        {roles.map(role => (
          <Badge> {role} </Badge>
        ))}
        <StyledAnchor
          href="https://docs.google.com/forms/d/e/1FAIpQLSeduPvGWySAkxCWQwdrvpvSppx2455xjNRh1yi4aCn_lJnQ2Q/viewform"
          target="_blank"
        >
          <div style={{ marginTop: '2rem' }}>
            <Chevron bgColor={BLUE} color={WHITE} />{' '}
            <ApplyHere> APPLY HERE </ApplyHere>
          </div>
        </StyledAnchor>
      </Col>
      <Col>
        <ImgWrapper>
          <Img fluid={img.childImageSharp.fluid} />
        </ImgWrapper>
      </Col>
    </StyledRow>
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
