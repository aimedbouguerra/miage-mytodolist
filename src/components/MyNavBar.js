import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import MyclearToken from './clearToken';

export default function MyNavBar() {
  const DATANAV = [
  { id:'menu-1', name: "Mes listes", href: "/TaskList" },
  { id:'menu-2', name: "Mes tâches", href: "/dashboard"},
  { id:'menu-3', name: "Mon Compte", href: "/Preferences"}
];
const navList = DATANAV
    .map(mynav => (
      <Nav.Link
        key={mynav.id}
        id={mynav.id}
        name={mynav.name}
        href={mynav.href}
        active={mynav.href===window.location.pathname}
      >{mynav.name}</Nav.Link>
    ));



  return(
    <div className="todoapp stack-large">
      <Navbar bg="primary" variant="dark" expand="md">
        <Navbar.Brand href="/">MonAppReact</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {navList}
          </Nav>        
          <MyclearToken />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}