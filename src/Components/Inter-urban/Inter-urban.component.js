import React from 'react';
import '../../App.css';
import '../Home/home.component.css';
import { InputGroup, Form, Jumbotron, Row, Container } from 'react-bootstrap'
import { BusCard } from '../bus-card/bus-card.component';
export class InterUrban extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            Nisja: '',
            Destinacioni: '',
            BusCards: [],


        }
    }

    HandleFormChange = (event) => {
        let StateName = event.target.name
        let StateValue = event.target.value
        this.setState({ [StateName]: StateValue })
    }

    testArray = [
        { name: 'a', "description": "Udhetim durres tirane kushte te mire dhe ajer i kondicionuar " },
        { name: 'v', "description": "Udhetim durres tirane kushte te mire dhe ajer i kondicionuar" }
    ]

    render() {
        return (
            <Container>
                <Jumbotron>
                    <Row>
                        <InputGroup>

                            <Form.Control as='select'
                                name="Nisja" onChange={this.HandleFormChange}>
                                <option>Nisja</option>
                            </Form.Control>

                            <Form.Control as='select'
                                name="Destinacioni" onChange={this.HandleFormChange}>
                                <option>Destinacioni</option>
                            </Form.Control>
                        </InputGroup>
                    </Row>
                    {this.testArray.map(el => <BusCard key={el.name} desc={el.description} />)}
                </Jumbotron>
            </Container>
        )

    }


}

