import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from "react-router-dom"
import Cookies from 'js-cookie'; 
import { Button,  ButtonGroup, Dropdown, MenuItem } from 'react-bootstrap';

const NavBar= (props) =>{


  const [navbarUserIsLogged, setnavbarUserIsLogged] = useState(false);
  const [userName, setUserName] = useState("Login / Sign up");
  console.log(Cookies.get('login'))

  const value = Cookies.get('login')

  // useEffect(() => {
  // setnavbarUserIsLogged(Cookies.get('loggedIn'));
  // window.setInterval(() => {
  //     setnavbarUserIsLogged(Cookies.get('loggedIn'));
  //   }, 500)
  // }, []);
  
  return (
  <>
  <Navbar expand="sm" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">Home A Pet</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/about">About Us</Nav.Link>
        <Nav.Link href="/filter">Filter Pets</Nav.Link>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Other actions
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/how">How it works</Dropdown.Item>
            <Dropdown.Item href="/adopt">Adoption Information</Dropdown.Item>
            <Dropdown.Item href="/care">Pet care and responsibilities</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
      <Nav className="ml-auto">
        {
          props.loggedIn ?
            <React.Fragment>
              <NavLink className="nav-link mr-3" to="/myaccount">My account</NavLink>
              <NavLink className='nav-link' to='/logout'>Log out</NavLink>
            </React.Fragment>
          :
            <React.Fragment>
              <NavLink className='nav-link mr-3 ' to='/login'>Log in</NavLink>
            </React.Fragment>
        }
      </Nav>
    </Container>
  </Navbar>
  </>
  );
}
export default NavBar;