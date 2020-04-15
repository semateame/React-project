import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom'
import { logout } from '../store/action/authAction'
import { Alert,Button } from "reactstrap";
import styles from './logout.module.css'
//import { withRouter } from "react-router";


class Logout extends Component {
  logoutHandler = (e) => {
    e.preventDefault()

    this.props.logout();
    this.props.history.push({ pathname: "/" })

  };

  static propTypes = {
    logout: PropTypes.func.isRequired
  };


  render() {




    return (
      
      <div className={styles.Post}>
        <Alert>Are sure you want log out ?</Alert>
        <Button onClick={this.logoutHandler}> Yes</Button>
      </div>
      
    );
  }
}



export default connect(
  null,
  { logout }
)(withRouter(Logout));
