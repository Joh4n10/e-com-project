import React from 'react';
import '../../App.css';
import '../Home/home.component.css';
import '../Inter-urban/inter-urban.component.css';
import { InputGroup, Form, Jumbotron, Row, Container } from 'react-bootstrap'
import { BusCard } from '../bus-card/bus-card.component';
import { Col } from 'react-bootstrap'
import { InterUrbanService } from '../../Services/inter-urban.service'
export class InterUrban extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            Nisja: '',
            Destinacioni: '',
            BusCards: [],
            ArrivalsList: [],
            DepartureList: [],

        }
    }
    iuService = new InterUrbanService();


    componentDidMount() {

        this.iuService.getDeparturesData().then(res => {
            this.setState({ DepartureList: res });
        })

        this.iuService.getArrivalsData().then(res => {
            this.setState({ ArrivalsList: res });

        })
    }


    HandleFormChange = (event) => {
        let StateName = event.target.name
        let StateValue = event.target.value
        this.setState({ [StateName]: StateValue }, () => {
            if (this.state.Nisja && this.state.Destinacioni) {
                this.iuService.getBusList({
                    nisja: this.state.Nisja,
                    destinacioni: this.state.Destinacioni
                }).then(res => {
                    this.setState({ BusCards: res })
                })
            }
        })

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
                            <Col xs lg="4">
                                <Form.Control as='select' name="Nisja" onChange={this.HandleFormChange} >
                                    <option>Nisja</option>
                                    {this.state.DepartureList.map(el => <option key={el.pro_qytetNisje} value={el.pro_qytetNisje}>{el.pro_qytetNisje}</option>)}
                                </Form.Control> </Col>

                            <Col xs lg="4">
                                <Form.Control as='select' name="Destinacioni" onChange={this.HandleFormChange}>
                                    <option>Destinacioni</option>
                                    {this.state.ArrivalsList.map(el => <option key={el.pro_qytetMberritje} value={el.pro_qytetMberritje}>{el.pro_qytetMberritje}</option>)}
                                </Form.Control> </Col>
                            <Col xs lg="2"></Col>
                        </InputGroup>
                    </Row>
                    {this.state.BusCards.map(el => <BusCard key={el.produkt_id} qytetNisje={el.pro_qytetNisje} qytetMberritje={el.pro_qytetMberritje} vendNisje={el.pro_vendNisje} vendMberritje={el.pro_vendMberritje} koheNisje={el.pro_koheNisje} koheMberritje={el.pro_koheMberritje} />)}
                </Jumbotron>
            </Container>

        )

    }


}

