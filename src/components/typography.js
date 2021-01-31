import React from 'react'
import s from 'styled-components'
import { Link } from 'gatsby'

import { POPPINS_BOLD, POPPINS_REGULAR } from '../styles/fonts'

export const PageTitle = s.h1`
  ${POPPINS_BOLD}
  font-size: 4rem;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`

export const PageDescription = s.p`
  font-size: 0.9rem;
  margin-top: 2rem;
  ${POPPINS_REGULAR}
`

export const StyledLink = s(Link)`
  color: #000000 !important;
  text-decoration: none !important;
`

export const StyledAnchor = s.a`
  color: #000000 !important;
  text-decoration: none !important;
`

export const URL = ({ link, children }) => {
  if (link.includes('http'))
    return (
      <StyledAnchor href={link} target="_blank">
        {children}
      </StyledAnchor>
    )
  return <StyledLink to={link}>{children}</StyledLink>
}
