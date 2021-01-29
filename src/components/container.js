import React from 'react'

import { Footer } from './footer'
import { Header } from './header'

export const Container = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)
