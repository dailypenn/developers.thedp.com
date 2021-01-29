import s from 'styled-components'

import { POPPINS_REGULAR } from '../styles/fonts'

export const Badge = s.div`
  background-color: rgba(25,186,253,0.1);
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