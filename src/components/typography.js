import s from 'styled-components'
import { Link } from 'gatsby'

import { POPPINS_BOLD } from '../styles/fonts'

export const PageTitle = s.h1`
  ${POPPINS_BOLD}
  font-size: 4rem;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`

export const PageDescription = s.p`
  ${POPPINS_BOLD}
`

export const StyledLink = s(Link)`
  color: #000000 !important;
  text-decoration: none !important;
`
