import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import s from 'styled-components'

import { StyledLink } from './typography'
import { ApplyButtonNav } from './badge'

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

const NavText = ({ link, name }) => (
  <StyledLink to={link} style={{ marginRight: '1rem' }}>
    <Navbar.Text>{name}</Navbar.Text>
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
    <Navbar.Brand href="#home">
      <img src="/logo-rect.png" height="40" />
    </Navbar.Brand>
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