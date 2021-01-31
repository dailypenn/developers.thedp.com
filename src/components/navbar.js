import React from 'react'
import { Navbar } from 'react-bootstrap'
import s from 'styled-components'

import { StyledLink } from './typography'
import { ApplyButtonNav } from './badge'
import { POPPINS_SEMI_BOLD } from '../styles/fonts'

const LINKS = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'Team',
    link: '/team'
  },
  {
    name: 'Products',
    link: '/products'
  }
]

const NavBarText = s(Navbar.Text)`
  ${POPPINS_SEMI_BOLD}
  color: black;
`

const NavText = ({ link, name }) => (
  <StyledLink to={link} style={{ marginRight: '2rem' }}>
    <NavBarText style={{ color: 'black' }}>{name}</NavBarText>
  </StyledLink>
)

const Collapse = s(Navbar.Collapse)`
  justify-content: flex-end;
  margin: 0.5rem 0;

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
  }
`

export const NavBar = () => (
  <Navbar
    sticky="top"
    expand="lg"
    style={{
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 5px 6px #00000029',
      fontSize: '0.9rem'
    }}
  >
    <StyledLink to="/">
      <Navbar.Brand>
        <img src="/logo-rect.png" height="40" />
      </Navbar.Brand>
    </StyledLink>
    <Navbar.Toggle style={{ border: 'none' }}>
      <img src="/menu.svg" />
    </Navbar.Toggle>
    <Collapse>
      {LINKS.map(link => (
        <NavText {...link} />
      ))}
      <StyledLink to="/apply">
        <ApplyButtonNav> Apply </ApplyButtonNav>
      </StyledLink>
    </Collapse>
  </Navbar>
)
