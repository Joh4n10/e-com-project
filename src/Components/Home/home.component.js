import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { Row, Col, Jumbotron } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import '../Home/home.component.css';
export class Home extends React.Component {

    // constructor() {
    //     super()
    // }

    render() {
        return (
            <Container fluid >
                <Jumbotron className='jmb'>
                <h1 className='busticket'>BUS TICKET</h1>
                
                <h3 className="busticket1"> Rezervoni dhe blini online biletën tuaj të autobuzit shumë shpejtë dhe thjeshtë, kudo ku ndodheni brenda Shqipërisë.
                </h3>
  
                    <Row className='buton'>
                        <Col xs={4}></Col>
                        <Col xs={2} >
                            <Button size='lg' className='btn1' variant="warning"><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/urban"> URBAN</Link></Button>
                        </Col>
                        <Col xs={2}>
                            <Button size='lg' className='btn1' variant="warning"> INTERURBAN</Button>
                        </Col>
                        <Col xs={4}></Col>
                    </Row>
                </Jumbotron>
            </Container>
            
        )

    }

    
}

