import React from 'react';
import { Form, Button, Input, Col, FormGroup } from 'reactstrap';


class AddForm extends React.Component {

    state = {
        country: '',
        price: null,
        rate: null,
    }



    countryHandler = (event) => {
        this.setState({ country: event.target.value })
    }

    priceHandler = (event) => {
        this.setState({ price: event.target.value })
    }


    rateHandler = (event) => {
        this.setState({ rate: event.target.value })
    }

    render() {

        let item = {
           county: this.state.country, 
           price :this.state.price,
           rate: this.state.rate
        }

        return (
            <Form>
                <Col sm={8}>
                    <FormGroup>
                        <label>Country</label>
                        <Input type="number" name="money" id="country" placeholder="Add country"
                            onChange={(event) => { this.countryHandler(event) }}
                        />
                        <label>Fee</label>
                        <Input type="number" name="money" id="fee" placeholder="0.00"
                            onChange={(event) => { this.priceHandler(event) }}
                        />
                        <label>Rate</label>
                        <Input type="number" name="money" id="rate" placeholder="0.00"
                            onChange={(event) => { this.rateHandler(event) }}
                        />
                        <br></br>
                        <Button color="success"
                            onClick={() => this.props.onAddCountry(item)}
                        >Add Country</Button>

                    </FormGroup>
                </Col>
            </Form >
        );
    }
}

export default AddForm;