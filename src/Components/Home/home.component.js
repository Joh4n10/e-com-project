import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
export class Home extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <Container >
                <Row>
                    <Col xs={4}></Col>
                    <Col xs={2} >
                        <Button size='lg' variant="outline-warning"><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/urban"> Urban</Link></Button>
                    </Col>
                    <Col xs={2}>
                        <Button size='lg' variant="outline-warning"> InterUrban</Button>
                    </Col>
                    <Col xs={4}></Col>
                </Row>
            </Container>
        )

    }
}

