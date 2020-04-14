import React, { useState, Fragment} from 'react';
import {Route,Link,Router,Switch,Redirect} from 'react-router-dom'
import Container from '../container/container';
import AddCountry from '../components/addCountry';
import Admin from '../components/admin';
import Signup from '../components/signup'
import Signin from '../components/signin'
import Logout from '../components/logout'
import { connect } from "react-redux";

import {history} from '../helper/history';


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  
} from 'reactstrap';
//import { Router } from 'express';

const AppNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  
  const authLinks = (
    <Fragment>
          <NavItem>
      <NavLink > <Link style={{color:"white"}} to ="/logout">Log out</Link></NavLink>
      <NavItem>
      <NavLink><Link style={{color:"white"}} to="/sendmoney">Send Money</Link></NavLink>
    </NavItem>

    <NavItem>
    <NavLink > <Link style={{color:"white"}} to ="/admin">Admin</Link></NavLink>
    </NavItem>

    <NavItem>
    <NavLink > <Link style={{color:"white"}} to ="/addcountry">Add Country</Link></NavLink>
    </NavItem>
      </NavItem>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <NavItem>
      <NavLink > <Link style={{color:"white"}} to ="/signup">Sign Up</Link></NavLink>
      <NavLink > <Link style={{color:"white"}} to ="/signin">Sign in</Link></NavLink>    
      </NavItem>
      
    </Fragment>
  );

  const {isAuthenticated}= props.authReducer

  return (
    <div>
      <Navbar className="bg-info clearfix"  light expand="md">
        <NavbarBrand style={{color:"white", size:"20px"}} href="/">HIMBOL WIRE</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>

          {isAuthenticated ? authLinks: guestLinks}
          
           
            
          </Nav>
         
       </Collapse>
      </Navbar>
<hr/>




<Route path='/sendmoney' exact component = {Container}></Route>
<Route path='/addcountry' exact component = {AddCountry}></Route>
<Route path='/admin' exact component = {Admin}></Route>
<Route path='/signup' exact component = {Signup}></Route>
<Route path='/signin' exact component = {Signin}></Route>
<Route path='/logout' exact component = {Logout}></Route>


    </div>
  );
}


const mapStateToProps = (state) => ({
  authReducer: state.authReducer
});
export default connect(mapStateToProps, null)(AppNavbar);
