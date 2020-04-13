import React, { Component } from "react";
import { connect } from "react-redux";

import { signupUserAsync } from '../store/action/userAction'

class Signup extends Component {

    state = {
        email: '',
        password: "",
        role: "",
    }

    signupHandler = (e) => {
        e.preventDefault();
        const item = {
            email: this.state.email,
            password: this.state.password,
            role: this.state.role
        };

        this.props.signupUserAsync(item)
    }


    render() {




        return (
            <div>
                <div className="container">
                    <label>Email</label><br></br>
                    <input type="text" value={this.state.email}
                        onChange={(event) => this.setState({ email: event.target.value })} /><br></br>

                    <label>Password</label><br></br>
                    <input type="text" value={this.state.password}
                        onChange={(event) => this.setState({ password: event.target.value })} /><br></br>
                    <label>Role</label><br></br>
                    <input type="text" value={this.state.role}
                        onChange={(event) => this.setState({ role: event.target.value })} /><br></br>

                    <button onClick={this.signupHandler}> Signup</button>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    user: state.userReducer.user
});

export default connect(
    mapStateToProps,
    { signupUserAsync }
)(Signup);
