import React, { Component } from "react";
import { connect } from "react-redux";

import { signinUserAsync } from '../store/action/userAction'

class Signin extends Component {

    state = {
        email: '',
        password: "",
    }

    signinHandler = (e) => {
        e.preventDefault();
        const item = {
            email: this.state.email,
            password: this.state.password,
        };

        this.props.signinUserAsync(item)
    }


    render() {




        return (
            <div>
                <div className="container">
                    <label>Email</label><br></br>
                    <input type="email" value={this.state.email}
                        onChange={(event) => this.setState({ email: event.target.value })} /><br></br>

                    <label>Password</label><br></br>
                    <input type="password" value={this.state.password}
                        onChange={(event) => this.setState({ password: event.target.value })} /><br></br>
                   

                    <button onClick={this.signinHandler}> Sign in</button>
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
    { signinUserAsync }
)(Signin);
