import React from 'react'
import s from 'styled-components'

import ChevronSVG from '../../static/icons/chevron-right.svg'
import { WHITE } from '../styles/constants'
import { URL } from './typography'

const Wrapper = s.span`
  border-radius: 50%;
  height: 25px;
  width: 25px;
  display: inline-block;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-color: ${({ bgColor = WHITE }) => bgColor};
  margin-left: 0.4rem;
  color: ${({ color = 'black' }) => color};
  font-size: 16px;
  ${({ floatRight }) => (floatRight ? 'float: right;' : '')}

  :hover {
    cursor: pointer;
  }
`

export const Chevron = ({ bgColor, color, floatRight = false, link }) => {
  const translate = floatRight ? 'translate(3px, 0px)' : 'translate(0, -1px)'

  if (link) {
    return (
      <URL link={link}>
        <Wrapper bgColor={bgColor} color={color} floatRight={floatRight}>
          <ChevronSVG style={{ transform: translate }} />
        </Wrapper>
      </URL>
    )
  }

  return (
    <Wrapper bgColor={bgColor} color={color} floatRight={floatRight}>
      <ChevronSVG style={{ transform: translate }} />
    </Wrapper>
  )
}
