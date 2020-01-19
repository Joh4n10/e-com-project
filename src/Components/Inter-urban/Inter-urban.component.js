import React from 'react';
import '../../App.css';
import '../Home/home.component.css';
import { InputGroup, Form, Jumbotron } from 'react-bootstrap'
export class InterUrban extends React.Component {

    // constructor() {
    //     super()
    // }

    render() {
        return (
            <Jumbotron>
                <InputGroup>

                    <Form.Control as='select'
                        name="Zona" onChange={this.HandleFormChange}>
                        <option>Zona</option>
                    </Form.Control>

                    <Form.Control as='select'
                        name="Zona" onChange={this.HandleFormChange}>
                        <option>Zona</option>
                    </Form.Control>
                </InputGroup>
            </Jumbotron>)

    }


}

