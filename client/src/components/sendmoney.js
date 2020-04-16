import React from 'react';
import { Form, Input, Col, FormGroup, Button, Row, Label } from 'reactstrap';
import { connect } from 'react-redux'
import { withRouter ,Link} from 'react-router-dom'
import styles from './sendmoney.module.css'
import {orderUserAsync} from '../store/action/authAction'


class Sendmoneyform extends React.Component {

    state = {
        loading: false,
        amount: null,
        email: "",
        rFirstName: "",
        rLastName: "",
        country: "",


    }





    
    clickHandler = (e) => {
      e.preventDefault();
        const item = {
            country: this.state.country,
            amount: this.state.amount,
            email: this.state.email,
            rFirstName: this.state.rFirstName,
            rLastName: this.state.rLastName

        };
        this.props.orderUserAsync(item)
        this.props.history.push('/addComments')
        }


    render() {



     

        let country = this.props.posts ? this.props.posts.map(item => {
            return (

                <option key={item._id}>
                    {item.country}
                </option>
            )
        }) : null


        return (



            <div className={styles.Post}>
                <h1 className={styles.Title}>Send Money Online</h1><br />
                <h3 className={styles.Title}>Your receiver’s country and send amount</h3><br />

                    <Form onSubmit={(event) => this.clickHandler(event)} >
                    <Col sm={10}>
                        <FormGroup>
                            <Input type="select" bsSize="md" name='product'
                                onChange={(event) => { this.setState({ country: event.target.value }) }} >
                                {country}
                            </Input>
                        </FormGroup>


                        <FormGroup>

                            <Input type="number" name="money" id="id1" onChange={(event) => {

                                this.setState({ amount: event.target.value })

                            }} placeholder="Amount" />
                        </FormGroup>
                        <FormGroup>

                            <Input type="email" name="email" id="e-mail" onChange={(event) => {

                                this.setState({ email: event.target.value })

                            }} placeholder="your email" />
                        </FormGroup>
                    </Col>
                    <hr /><br />
                    <h4 className={styles.Title}> Recivers Address</h4>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input type="text" name="fname" placeholder="name" onChange={(event) => { this.setState({ rFirstName: event.target.value }) }} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="lname">Last name</Label>
                                <Input type="text" name="lname" placeholder="lastname" onChange={(event) => { this.setState({ rLastName: event.target.value }) }} />
                            </FormGroup>
                        </Col>
                    </Row>
                  
                    <hr /> <br />

                    <Button
                        color="primary" size="lg" block

                    >
                      order now 
                 </Button>
                </Form >

            </div>
        );
    }
}

const MapStatetoProps = state => {
    return{
        orderItems:state.authReducer.orderItems
    }
   
}




export default connect( MapStatetoProps, { orderUserAsync})(withRouter(Sendmoneyform));

