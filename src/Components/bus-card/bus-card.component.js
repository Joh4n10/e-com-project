import React from 'react';
import '../../App.css';
import '../Home/home.component.css';
import { Row, Card, Col } from 'react-bootstrap'
export class BusCard extends React.Component {

    constructor(props) {
        super()

    }

    render() {
        return (
            <Row style={{ paddingTop: "20x" }}>
                <Card style={{ margin: '0 auto', width: "100%" }}>
                    <Card.Header>Durres-Tirane</Card.Header>
                    <Card.Body>
                        <Col lg="3"><img alt="as" src={require('../../Assets/school.jpg')} style={{ width: "70%" }} /></Col>
                        <Col lg="9"><h4>{this.props.desc}</h4></Col>
                        <footer className="blockquote-footer">
                            Nisja <cite title="Source Title">durres 12:00</cite>
                        </footer>

                    </Card.Body>
                </Card>

            </Row>
        )

    }


}

