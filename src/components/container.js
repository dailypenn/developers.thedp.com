import React from 'react'
import s from 'styled-components'

import { Footer } from './footer'
import { Header } from './header'
import { NavBar } from './navbar'

const Wrapper = s.div`
  overflow-x: hidden;
`

export const Container = ({ children, title }) => (
  <Wrapper>
    <Header title={title} />
    <NavBar />
    {children}
    <Footer />
  </Wrapper>
)
