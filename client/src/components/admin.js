import React from 'react';
import { Form, Input, Col, FormGroup } from 'reactstrap';
import * as actionTypes from '../store/action/countryAction'
import { connect } from 'react-redux';
import { deleteCountryAsync } from '../store/action/countryAction'


class AdminForm extends React.Component{

   

    
 deleteCountry=(id)=>{
 this.props.deleteCountryAsync(id);
}
render(){
return (
    
             <div>
             <h3> </h3>
             <hr></hr>
             {
                        
              this.props.posts ? this.props.posts.map(country => {
                    return (
                        <div>

                        <div key={country._id}> Id :{country._id}</div>
                        <div key={country._id}> country :{country.country}</div>
                        <div key={country._id}> Price :{country.price}</div>
                        <div key={country._id}> Rate :{country.rate}</div>

                        <span>
                        <button class="btn btn-danger" type="submit" onClick={()=>{this.deleteCountry(country._id)}} >Delete </button>
    
                        </span>


                        <hr></hr>

                        </div>
                       
                    )
                }) : null

            }
             </div>
                    

);
}
}

const mapStateToProps = state => {
return {
     posts: state.countryReducer.posts

}
}




export default connect(mapStateToProps, {deleteCountryAsync})(AdminForm);