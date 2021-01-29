import React from 'react'
import s from 'styled-components'

import { Container } from '../components'
import { POPPINS_BOLD, POPPINS_REGULAR } from '../styles/fonts'

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

const Index = () => {
  return (
    <Container>
      <Hero>
        <span role="img" style={{ fontSize: '4rem' }}> 👋 </span>
        <HelloWorld> Hello world. </HelloWorld>
        <p style={{ fontSize: '2.5rem' }}>We're the DP Tech Dept</p>

        <SubHead>
          We power everything digital by The Daily Pennsylvanian, <br /> Penn's
          independent, student-run newspaper.
        </SubHead>

        <Checkout> Check out our featured projects </Checkout>
        
      </Hero>
    </Container>
  )
}

export default Index
