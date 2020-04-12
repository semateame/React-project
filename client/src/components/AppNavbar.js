import React, { useState} from 'react';
import {Route,Link} from 'react-router-dom'
import Container from '../container/container';
import AddCountry from '../components/addCountry';
import Admin from '../components/admin';


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  
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
            <NavLink > <Link style={{color:"white"}} to ="/admin">Admin</Link></NavLink>
            </NavItem>

            <NavItem>
            <NavLink > <Link style={{color:"white"}} to ="/addcountry">Add Country</Link></NavLink>
            </NavItem>
          
           
            
          </Nav>
          <NavLink > <Link style={{color:"white"}} to ="/component">Sign Up</Link></NavLink>
          <NavLink > <Link style={{color:"white"}} to ="/component">Sign in</Link></NavLink>
          <NavLink > <Link style={{color:"white"}} to ="/component">Log out</Link></NavLink>
       </Collapse>
      </Navbar>
<hr/>
<Route path='/sendmoney' exact component = {Container}></Route>
<Route path='/addcountry' exact component = {AddCountry}></Route>
<Route path='/admin' exact component = {Admin}></Route>



    </div>
  );
}

export default AppNavbar;