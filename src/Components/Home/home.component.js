import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom'
import { Row, Col, Jumbotron } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import '../Home/home.component.css';
export class Home extends React.Component {

    // constructor() {
    //     super()
    // }

    render() {
        return (
            <Container fluid className="p-0" >
                <Jumbotron className='jmb'>
                    <div style={{ textAlign: "center" }}>
                        <img alt="as" src={require('../../Assets/bus.png')} style={{ width: "8%" }} />
                    </div>
                    <h1 className='busticket'>BUS TICKET</h1>
                    <h3 className="busticket1"> Rezervoni dhe blini online biletën tuaj të autobuzit shumë shpejtë dhe thjeshtë, kudo ku ndodheni në Shqipëri.</h3>
                    <Row className='buton'>
                        <Col xs={4}></Col>
                        <Col xs={2} >
                            <Link size='lg' className='btn1 btn btn-warning text-white btn-lg' style={{ textDecoration: 'none', color: 'inherit' }} variant="warning" to="/urban"> URBAN</Link>
                        </Col>
                        <Col xs={2}>
                            <Link size='lg' className='btn1 btn btn-warning text-white btn-lg' variant="warning" style={{ textDecoration: 'none', color: 'inherit' }} to="/inter-urban"> INTERURBAN</Link>
                        </Col>
                        <Col xs={4}></Col>
                    </Row>
                </Jumbotron>
            </Container>

        )

    }


}

