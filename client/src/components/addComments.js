import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { commentUserAsync } from "../store/action/commentAction";



class Comment extends Component {
  state = {
    email: "",
    content: ""
   
  };



commetHandler = (e) => {
    e.preventDefault();
    const newComment = {
      email: this.state.email,
      content: this.state.content,
     
    };

    this.props.commentUserAsync(newComment);
  };

  static propTypes = {
    commentUserAsync:PropTypes.func.isRequired
  };

    

  render() {
    return (
      <div>
        <div className="container">
          <label>Email:</label>
          <input
            type="text"
            value={this.state.email}
            onChange={(event) => 

                this.setState({ 
                email: event.target.value })}
          />
          <br></br>
          <br></br>

          <label>Comments:</label>
          <textarea
            type="text"
            value={this.state.content}
            onChange={(event) =>
              this.setState({ content: event.target.value })
            }
          />
          
          <br></br>

          <button onClick={this.commetHandler}> Add Comment</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    content: state.commentReducer.comments
});



export default connect(mapStateToProps, { commentUserAsync })(Comment);
