import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { Form, Input, Col, FormGroup, Button, La, Inputbel } from 'reactstrap';

import PropTypes from "prop-types";
import { signupUserAsync } from "../store/action/authAction";
import { Alert } from 'reactstrap'
import { clearError } from '../store/action/errorAction'
import styles from './signup.module.css'
class Signup extends Component {
  state = {
    email: "",
    password: "",
    role: "",
    msg: null
  };

  //   this.props.clearError();

  signupHandler = (e) => {
    e.preventDefault();
    const newUser = {
      email: this.state.email,
      password: this.state.password,
      role: this.state.role
    };

    this.props.signupUserAsync(newUser);
    // this.props.history.push({pathname:'/signin'})
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    signupUserAsync: PropTypes.func.isRequired,
    clearError: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      if (error.id === "SIGNUP_FAIL") {
        this.setState({ msg: error.msg.msg })
      } else {
        this.setState({ msg: error.msg.msg })
      }
    }

    // if(isAuthenticated){
    //  return  <Alert>{"Registered sucessfully"}</Alert>
    // }

  }

  render() {
    return (
      <div className={styles.Post}>
        {this.state.msg ? <Alert color="danger">{this.state.msg}</Alert> : null}

        <Form className="container" onSubmit={this.signupHandler}>
          <Col sm={12}>
            <label>Email</label>
            <br></br>

            <Input
              type="text"
              value={this.state.email}
              onChange={(event) =>

                this.setState({
                  email: event.target.value
                })}
            />


            <label>Password</label> <br></br>

            <Input
              type="password"
              value={this.state.password}
              onChange={(event) =>
                this.setState({ password: event.target.value })
              }
            />


            <label>Role</label>

            <Input
              type="text"
              value={this.state.role}
              onChange={(event) => this.setState({ role: event.target.value })}
            /><br />



            <Button  color="primary" size="lg" > Signup</Button>
          </Col>
        </Form><br />
        <p>If you already have please LogIn !!</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  error: state.errorReducer
});
export default connect(mapStateToProps, { signupUserAsync, clearError })(Signup);
