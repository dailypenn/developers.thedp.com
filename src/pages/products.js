import React from 'react'
import s from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { Row, Col } from 'react-bootstrap'

import { Container } from '../components'
import { PageTitle, PageDescription } from '../components/typography'
import { POPPINS_MEDIUM, POPPINS_REGULAR } from '../styles/fonts'
import { BLUE_PERCENT, RED_PERCENT } from '../styles/constants'

const WHITE = `#FFFFFF`
const TEXT_GREY = `#494748`
const BOX_SHADOW = `0px 5px 20px rgba(0, 0, 0, 0.1)`

const CardWrapper = s.div.attrs(({ className }) => ({
  className
}))`
  background-color: ${WHITE};
  border-radius: 15px;
  box-shadow: ${BOX_SHADOW};
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${({ flush }) => flush || `padding-bottom: 30px;`}
  ${({ fixed }) =>
    fixed ||
    `:hover {
    transform: scale(1.01);
  }`}
  transition: all 0.3s;
  margin-bottom: 60px;
  overflow: hidden;
`

const Link = s.a`
  :hover {
    color: initial;
    text-decoration: none;
  }
`

const CardHeader = s.h2`
  margin-right: 40px;
  margin-left: 40px;
  margin-top: 30px;
  color: black;
  ${POPPINS_MEDIUM}
`

const Content = s.p`
  margin-right: 40px;
  margin-left: 40px;
  color: black;
  font-size: 90%;
  margin-top: 4rem;
  ${POPPINS_REGULAR}
`

const getBgColor = idx => {
  const color0 = BLUE_PERCENT(0.1)
  const color1 = RED_PERCENT(0.32)

  const flip = Math.floor(idx / 2) % 2 !== 0
  let bgColor = idx % 2 === 0 ? color0 : color1

  if (flip) {
    if (bgColor === color0) {
      bgColor = color1
    } else {
      bgColor = color0
    }
  }

  return bgColor
}

const ImgWrapper = s.div`
  background-color: ${({ idx }) => getBgColor(idx)};
  padding: 2rem 0;
`

const CardContent = ({ name, link, description, img, idx }) => (
  <Link href={link} target="_blank">
    <ImgWrapper idx={idx}>
      <Img
        fluid={img.childImageSharp.fluid}
        style={{ width: '280px', display: 'block', margin: '0 auto' }}
      />
    </ImgWrapper>
    <CardHeader href={link}>{name}</CardHeader>
    <Content>{description}</Content>
  </Link>
)

const Card = ({ className, children, flush }) => (
  <CardWrapper className={className} flush={flush}>
    {children}
  </CardWrapper>
)

const Products = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { eq: "products.json" } }) {
        edges {
          node {
            childrenProductsJson {
              img {
                childImageSharp {
                  fluid(maxWidth: 1100) {
                    ...GatsbyImageSharpFluid
                    src
                  }
                }
              }
              name
              description
              link
            }
          }
        }
      }
    }
  `)

  const {
    node: { childrenProductsJson: products }
  } = data.allFile.edges[0]

  return (
    <Container>
      <Row style={{ padding: '3rem 3rem' }}>
        <Col md={4}>
          <PageTitle> Our Products </PageTitle>
          <PageDescription> asdasdasdasdasdasdasd </PageDescription>
        </Col>
        <Col>
          <Row>
            {products.map((product, idx) => (
              <Col md={6}>
                <Card>
                  <CardContent {...product} idx={idx} />
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Products
