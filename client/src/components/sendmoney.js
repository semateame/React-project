import React from 'react';
import { Form, Input, Col, FormGroup, Button, Row, Label } from 'reactstrap';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Payment from "./payment/payment"
import styles from './sendmoney.module.css'


class Sendmoneyform extends React.Component {

    state = {

        loading: false,
        Amount: null,
        email: "",
        name: '',
        recivername: "",
        lname: "",
        country: "",
        State: "",


    }

    // componentDidMount() {
    //     if (!this.state.loading) {
    //         let arr = [...this.state.method]
    //         arr = [...["Debit", 'Credit']]
    //         this.setState({ method: arr, loading: true })
    //     }


    // }


    clickHandler = (event) => {





        console.log(this.props);
    }



    render() {
        let arr = []
        if (this.state.loading) {
            arr = this.state.method.map((item, index) => {
                return (


                    <Payment
                        click={this.PostHandler}
                        key={index}
                        title={item}
                    />
                )
            })
        }

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
                                onChange={(event) => { this.setState({ name: event.target.value }) }} >
                                {country}
                            </Input>
                        </FormGroup>


                        <FormGroup>

                            <Input type="number" name="money" id="id1" onChange={(event) => {

                                this.setState({ Amount: event.target.value })

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
                                <Input type="text" name="fname" placeholder="name" onChange={(event) => { this.setState({ recivername: event.target.value }) }} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="lname">Last name</Label>
                                <Input type="text" name="lname" placeholder="lastname" onChange={(event) => { this.setState({ lname: event.target.value }) }} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="country">country</Label>
                                <Input type="text" name="country" placeholder="country" onChange={(event) => { this.setState({ country: event.target.value }) }} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="state">State</Label>
                                <Input type="text" name="state" placeholder="state" onChange={(event) => { this.setState({ State: event.target.value }) }} />
                            </FormGroup>
                        </Col>
                    </Row>


                    <hr /> <br />

                    <Button
                        color="primary" size="lg" block

                    >
                        Continue
                 </Button>
                </Form >

            </div>
        );
    }
}

const MapStatetoProps = state => {

}

const MapDispatchtoProps = dispatch=>{

}




export default connect()(Sendmoneyform);