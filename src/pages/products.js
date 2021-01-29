import React from 'react'
import s from 'styled-components'
import Img from 'gatsby-image'
import { Row, Col } from 'react-bootstrap'

import { Header } from '../components'
import ProductsJSON from '../json/products.json'
import { PageTitle, PageDescription } from '../components/typography'
import { POPPINS_MEDIUM, POPPINS_REGULAR } from '../styles/fonts'

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
  ${({ color }) => color && `color: ${color};`}
  ${POPPINS_MEDIUM}
`

const Subheader = s.p`
  ${({ color }) => color && `color: ${color};`}
  margin-right: 40px;
  margin-left: 40px;
  font-style: italic;
  ${POPPINS_REGULAR}
`

const Content = s.p`
  margin-right: 40px;
  margin-left: 40px;
  color: ${TEXT_GREY};
`

export const CardContent = ({
  title,
  link,
  authors,
  abstract,
  image,
  primary,
  secondary,
  noImg
}) => (
  <Link href={link} target="_blank">
    {/* {!noImg && (
      <Img fluid={image.src.childImageSharp.fluid} className="img-fluid" />
    )} */}
    <CardHeader href={link} color={primary}>
      {title}
    </CardHeader>
    {/* <Subheader color={secondary}>{authors}</Subheader> */}
    <Content>{abstract}</Content>
  </Link>
)

const Card = ({ className, children, flush }) => (
  <CardWrapper className={className} flush={flush}>
    {children}
  </CardWrapper>
)

const Products = () => {
  return (
    <>
      <Header />
      <Row style={{ padding: '3rem 3rem' }}>
        <Col md={4}>
          <PageTitle> Our Products </PageTitle>
          <PageDescription> asdasdasdasdasdasdasd </PageDescription>
        </Col>
        <Col>
          <Row>
            {ProductsJSON.map(product => (
              <Col md={6}>
                <Card>
                  <CardContent {...product} />
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default Products
