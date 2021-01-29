import React from 'react'
import s from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Row, Col } from 'react-bootstrap'

import { Container, PageTitle, Badge } from '../components'
import { LIGHT_BLUE, WHITE, RED, RED_PERCENT } from '../styles/constants'
import { POPPINS_SEMI_BOLD, POPPINS_LIGHT, POPPINS_BOLD } from '../styles/fonts'

const CardWrapper = s(Row)`
  background-color: ${WHITE};
  border-radius: 24px;
  box-shadow: 0px 0px 15px rgba(0,0,0,0.06);
  padding: 2rem 1rem;
  margin-top: 2rem;
`

const CardTitle = s.p`
  font-size: 1.4rem;
  ${POPPINS_BOLD}
`

const CardDescription = s.div`
  ${POPPINS_LIGHT}
  margin-top: 4.5rem;
`

const Card = ({ name, tags, img, emoji, from }) => (
  <CardWrapper style={{ marginRight: '1rem' }}>
    <Col md={6}>
      <Img
        fluid={img.childImageSharp.fluid}
        style={{ borderRadius: '50%', border: `5px solid ${RED}` }}
      />
    </Col>
    <Col md={6}>
      <CardTitle>
        {name} {emoji}
      </CardTitle>
      {tags.map(tag => (
        <Badge bgColor={RED_PERCENT(0.32)}> {tag} </Badge>
      ))}
      <CardDescription> from {from} </CardDescription>
    </Col>
  </CardWrapper>
)

const SectionWrapper = s.div`
  background-color: ${({ idx }) => (idx % 2 === 0 ? LIGHT_BLUE : WHITE)};
  padding: 4rem 7rem;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
`

const Members = ({ members }) => (
  <Row>
    {members.map(member => (
      <Col md={4}>
        <Card {...member} />
      </Col>
    ))}
  </Row>
)

const TeamTitle = s.h2`
  ${POPPINS_SEMI_BOLD}
`

const TeamDescription = s.p`
  ${POPPINS_LIGHT}
  width: 40%;
  margin-top: 0.9rem;
`

const PageDescription = s.p`
  ${POPPINS_BOLD}
  margin-top: 2rem;
  padding: 0 25rem;

  @media screen and (max-width: 992px) {
    padding: 0 10rem;
  }
`

const Teams = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { eq: "team.json" } }) {
        edges {
          node {
            childrenTeamJson {
              name
              description
              members {
                name
                tags
                emoji
                from
                img {
                  childImageSharp {
                    fluid(maxWidth: 1000, maxHeight: 1000) {
                      ...GatsbyImageSharpFluid
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const {
    node: { childrenTeamJson: teams }
  } = data.allFile.edges[0]

  return (
    <Container>
      <div style={{ marginTop: '2rem' }}>
        <div style={{ textAlign: 'center' }}>
          <PageTitle> Meet the Team </PageTitle>
          <PageDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </PageDescription>
        </div>
        {teams.map((team, idx) => (
          <SectionWrapper idx={idx}>
            <TeamTitle>{team.name}</TeamTitle>
            <TeamDescription>{team.description}</TeamDescription>
            <Members members={team.members} />
          </SectionWrapper>
        ))}
      </div>
    </Container>
  )
}

export default Teams
