import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

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

export const NavText = ({ link, name }) => (
  <StyledLink to={link} style={{ marginRight: '1rem' }}>
    <Navbar.Text>{name}</Navbar.Text>
  </StyledLink>
)

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
    <Navbar.Collapse className="justify-content-end">
      <Nav style={{ textAlign: 'center' }}>
        {LINKS.map(link => (
          <NavText {...link} />
        ))}
        <StyledLink to="apply">
          <ApplyButtonNav> Apply </ApplyButtonNav>
        </StyledLink>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
