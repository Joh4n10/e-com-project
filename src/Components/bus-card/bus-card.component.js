import React from 'react';
import '../../App.css';
import '../Home/home.component.css';
import { Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { Utils } from '../../Services/utils';
export class BusCard extends React.Component {

    constructor(props) {
        super()
        console.log(props);

    }
    disableBtn = true
    getUrl() {
        if (this.props.qytetNisje && this.props.qytetMberritje) {
            this.disableBtn = false
            return '/bli?' + Utils.seriliseParams({
                qytetNisje: this.props.qytetNisje,
                qytetMberritje: this.props.qytetMberritje,
            })

        }
    }

    render() {
        return (
            <Row className='linja'>
                <Col xs lg="2">
                    <img alt="as" src={require('../../Assets/alvavel.jpg')} style={{ width: "70%" }} />
                </Col>
                <Col lg={3} >
                    <span className='qyteti'>{this.props.qytetNisje} {this.props.koheNisje} </span>
                    <p className='stacioni'>{this.props.vendNisje}</p>
                </Col>
                <Col xs={2}> <img alt="as" src={require('../../Assets/rating.png')} style={{ width: "70%" }} /></Col>
                <Col lg={3}> <span className='destinacioni'>{this.props.qytetMberritje} {this.props.koheMberritje} </span>
                    <p className='stacioniD'>{this.props.vendMberritje}</p>
                </Col>
                <Col lg={2}>
                    <Button variant="warning" className='bli'><Link style={{ textDecoration: 'none', color: 'inherit' }} disable={this.disableBtn.toString()} to={this.getUrl()}>Bli Bileten</Link></Button>
                </Col>

            </Row>
        )

    }


}