import React from 'react';
import '../../App.css';
import '../Home/home.component.css';
import '../Inter-urban/inter-urban.component.css';
import { InputGroup, Form, Jumbotron, Row, Container } from 'react-bootstrap'
import { BusCard } from '../bus-card/bus-card.component';
import { Col } from 'react-bootstrap'

export class InterUrban extends React.Component {

    // constructor() {
    //     super()
    // }

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
          
            <Container fluid>
                <Jumbotron className='jmb1'>
                    <h1 className='titull'>Prenotoni Biletën Tuaj Online </h1>
                    <Row>
                                
                         <InputGroup className='busticket2'>    
                         <Col xs lg="2"></Col>
                         <Col xs lg="4">  <Form.Control as='select'
                                name="Zona" onChange={this.HandleFormChange} >
                                <option>Nisja</option>
                                </Form.Control> </Col>

                                <Col xs lg="4">   <Form.Control as='select' 
                                name="Zona" onChange={this.HandleFormChange}>
                                <option>Destinacioni</option> 
                            </Form.Control> </Col>
                            <Col xs lg="2"></Col>
                        </InputGroup>
                    </Row>
                    {this.testArray.map(el => <BusCard key={el.name} desc={el.description} />)}
                </Jumbotron>
            </Container>
         
        )

    }


}

