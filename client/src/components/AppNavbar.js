import React, { useState} from 'react';
import {Route,Link} from 'react-router-dom'
import Container from '../container/container';
import AddCountry from '../components/addCountry';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const AppNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  

  return (
    <div>
      <Navbar className="bg-info clearfix"  light expand="md">
        <NavbarBrand style={{color:"white", size:"20px"}} href="/">HIMBOL WIRE</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink><Link style={{color:"white"}} to="/sendmoney">Send Money</Link></NavLink>
            </NavItem>
            <NavItem>
            <NavLink > <Link style={{color:"white"}} to ="/addcountry">Add Country</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavLink href="/components/">Sign Up</NavLink>
          <NavLink href="/components/">Sign In </NavLink>   
          <NavLink href="/components/">Log Out </NavLink>      
       </Collapse>
      </Navbar>
<hr/>
<Route path='/sendmoney' exact component = {Container}></Route>
<Route path='/addcountry' exact component = {AddCountry}></Route>

    </div>
  );
}

export default AppNavbar;