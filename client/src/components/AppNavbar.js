import React, { useState, Fragment } from "react";
import { Route, Link, Router, Switch, Redirect } from "react-router-dom";
import Container from "../container/container";
import AddCountry from "./addCountry";
import Admin from "./admin";
import Signup from "./signup";
import Signin from "./signin";
import Logout from "./logout";
import { connect } from "react-redux";
import addComment from "./addComments";
import viewComment from "./viewComment";
import homePage from './homePage'
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
  NavbarText,
} from "reactstrap";

const AppNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const { isAuthenticated } = props.authReducer;
  const { user } = props.authReducer;
  console.log(props.authReducer);

  return (
    <div>
      <Navbar className="bg-info clearfix" light expand="md">
        <NavbarBrand style={{ color: "white", size: "20px" }} href="/">
          HIMBOL WIRE
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          {isAuthenticated ?  (
            <NavItem>
              <NavLink>
                <Link style={{ color: "white" }} to="/sendmoney">
                  Send Money
                </Link>
              </NavLink>
              </NavItem> 
              ) : null }

          {isAuthenticated ?  (
            <NavItem>
            <NavLink>
              {" "}
              <Link style={{ color: "white" }} to="/admin">
                Admin
              </Link>
            </NavLink>
          </NavItem>

          ) : null}

          {isAuthenticated ?  (
            <NavItem>
            <NavLink>
              {" "}
              <Link style={{ color: "white" }} to="/addcountry">
                Add Country
              </Link>
            </NavLink>
          </NavItem>
          ) : null}
            
            
           

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle style={{ color: "white" }} nav caret>
                Feedbacks
              </DropdownToggle>
              <DropdownMenu className="bg-info clearfix" right>
                <DropdownItem>
                  <NavLink>
                    {" "}
                    <Link
                      style={{
                        color: "white",
                        background: "rgb(58, 179, 201)",
                      }}
                      to="/viewcomments"
                    >
                      {" "}
                      View Feedbacks
                    </Link>
                  </NavLink>
                </DropdownItem>
                
                <DropdownItem divider />
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          {isAuthenticated ? (
            <NavLink>
              {" "}
              <Link style={{ color: "white" }} to="/logout">
                Log out
              </Link>
            </NavLink>
          ) : (
            <NavLink>
              {" "}
              <Link style={{ color: "white" }} to="/signin">
                Sign in
              </Link>
            </NavLink>
          )}
          {isAuthenticated ? null : (
            <NavLink>
              {" "}
              <Link style={{ color: "white" }} to="/signup">
                Sign Up
              </Link>
            </NavLink>
          )}
        </Collapse>
      </Navbar>
      <Route path="/sendmoney" exact component={Container}></Route>
      <Route path="/addcountry" exact component={AddCountry}></Route>
      <Route path="/admin" exact component={Admin}></Route>
      <Route path="/signup" exact component={Signup}></Route>
      <Route path="/signin" exact component={Signin}></Route>
      <Route path="/logout" exact component={Logout}></Route>
      <Route path="/addComments" exact component={addComment}></Route>
      <Route path="/viewComments" exact component={viewComment}></Route>
      <Route path="/" exact component={homePage}></Route>
     

    </div>
  );
};

const mapStateToProps = (state) => ({
  authReducer: state.authReducer
});
export default connect(mapStateToProps, null)(AppNavbar);