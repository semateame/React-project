import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {logout} from '../store/action/authAction'


 class Logout extends Component {
    logoutHandler = (e) => {
        e.preventDefault()
    
        this.props.logout();
      };
    
      static propTypes = {
        logout: PropTypes.func.isRequired
      };
  

    render() {




        return (
            <div>
            <button onClick={this.logoutHandler}> LOGOUT</button>
            </div>
        );
    }
}



export default connect(
    null,
    { logout }
)(Logout);
