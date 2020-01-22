import React from 'react';
import '../../App.css';
import '../Home/home.component.css';
import { Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

export class BusCard extends React.Component {

    constructor(props) {
        super()

    }



    render() {
        return (
            // <Row style={{ paddingTop: "20x" }}>
            //     <Card style={{ margin: '0 auto', width: "100%" }}>
            //         <Card.Header>Durres-Tirane</Card.Header>
            //         <Card.Body>
            //             <Col lg="3"><img alt="as" src={require('../../Assets/school.jpg')} style={{ width: "70%" }} /></Col>
            //             <Col lg="9"><h4>{this.props.desc}</h4></Col>
            //             <footer className="blockquote-footer">
            //                 Nisja <cite title="Source Title">durres 12:00</cite>
            //             </footer>



            <Row className='linja'>
                <Col xs lg="2">
                    <img alt="as" src={require('../../Assets/alvavel.jpg')} style={{ width: "70%" }} />
                </Col>
                <Col lg={3} >
                    <span className='qyteti'>Durres 5:50</span>
                    <p className='stacioni'>Stacioni Trenit</p>
                </Col>
                <Col xs={2}> <img alt="as" src={require('../../Assets/rating.png')} style={{ width: "70%" }} /></Col>
                <Col lg={3}> <span className='destinacioni'>Tirane 6:15</span>
                    <p className='stacioniD'>Terminali Nderkombetar i Autobusave</p>
                </Col>
                <Col lg={2}>  <Button variant="warning" className='bli'>Bli Bileten</Button>
                </Col>

            </Row>




            //         {/* </Card.Body>
            //     </Card>

            // </Row> */}
        )

    }


}

