import s from 'styled-components'
import { Link } from 'gatsby'

import { POPPINS_BOLD } from '../styles/fonts'

export const PageTitle = s.h1`
  ${POPPINS_BOLD}
`

export const PageDescription = s.p`
  ${POPPINS_BOLD}
`

export const StyledLink = s(Link)`
  color: #000000 !important;
  text-decoration: none !important;
`
