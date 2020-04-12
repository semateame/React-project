import React from 'react';
import { Form, Input, Col, FormGroup } from 'reactstrap';


const Sendmoneyform = (props) => {
    return (
        <Form>
            <Col sm={8}>
                <FormGroup>
                    <label>Country</label>
                    <Input type="select" bsSize="md">
                        {
                            
                            props.posts ? props.posts.map(item => {
                                return (
                                    <option key={item._id}>{item.country}</option>
                                )
                            }) : null

                        }



                    </Input>
                </FormGroup>
                <FormGroup>
                    <label>Amount</label>
                    <Input type="number" name="money" id="id1" placeholder="0.00" />
                </FormGroup>
            </Col>
        </Form>
    );
}

export default Sendmoneyform;