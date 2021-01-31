import React from 'react'

import { Footer } from './footer'
import { Header } from './header'
import { NavBar } from './navbar'

export const Container = ({ children, title }) => (
  <>
    <Header title={title} />
    <NavBar />
    {children}
    <Footer />
  </>
)
