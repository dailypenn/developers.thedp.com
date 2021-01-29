import s from 'styled-components'

import { POPPINS_REGULAR } from '../styles/fonts'
import { BLUE, BLUE_PERCENT } from '../styles/constants'

export const Badge = s.div`
  background-color: ${({ bgColor = BLUE_PERCENT(0.1) }) => bgColor};
  ${POPPINS_REGULAR}
  border-radius: 5px;
  width: 7rem;
  padding: 0.2rem 0.5rem;
  color: black;
  font-size: 90%;
  float: left;
  margin-right: 1rem;
  text-align: center;
`

const ApplyButton = s.div`
  background-color: ${BLUE};
  ${POPPINS_REGULAR}
  border-radius: ${({ radius = '6px' }) => radius}px;
  width: 5rem;
  text-align: center;
  padding: 0.2rem 1rem;
  color: white;
`

export const ApplyButtonNav = s.div`
  background-color: ${BLUE};
  ${POPPINS_REGULAR}
  border-radius: 21px;
  width: 5rem;
  text-align: center;
  padding: 0.2rem 1rem;
  color: white;
  margin-right: 2rem;

  @media (max-width: 992px) {
    margin-top: 0.4rem;
    margin-right: 0.4rem;
  }
`
