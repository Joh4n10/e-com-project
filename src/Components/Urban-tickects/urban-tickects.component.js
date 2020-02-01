import React from 'react'
import { InputGroup, FormControl, Form, Container, Row, Button, Col } from 'react-bootstrap'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { UrbanService } from '../../Services/urban-handle.service';
import { Link } from 'react-router-dom';
import { Utils } from '../../Services/utils';
import { Table } from 'react-bootstrap';
import '../Inter-urban/inter-urban.component.css';

export class UrbanTickets extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            Emer: '',
            Mbiemer: '',
            Kategoria: '',
            Zona: '',
            Cmimi: 0,
            purchaseUrl: ''
        }
    }
    Requests = new UrbanService()
    categoryOptions = ['Femije', 'PAK', 'Te rritur', 'Te moshuar']
    zoneOptions = ['Durres', 'Durres-rethina', 'etj']
    disableBtn = true
    // componentDidMount() {
    //     fetch("http://localhost:4000/home")
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 console.log(result)
    //                 // this.setState({
    //                 //     isLoaded: true,
    //                 //     items: result.items
    //                 // });
    //             },
    //             // Note: it's important to handle errors here
    //             // instead of a catch() block so that we don't swallow
    //             // exceptions from actual bugs in components.
    //             (error) => {
    //                 this.setState({
    //                     isLoaded: true,
    //                     error
    //                 });
    //             }
    //         )
    // }
    getUrl() {
        if (this.state.Kategoria && this.state.Zona && this.state.Mbiemer && this.state.Emer) {
            return '/bli?' + Utils.seriliseParams({
                zona: this.state.Zona,
                kategoria: this.state.Kategoria,
                Emer: this.state.Emer,
                Mbiemer: this.state.Mbiemer
            })

        }
    }

    render() {

        return (
            < Container fluid>
                <Jumbotron className='jmb2' style={{ background: "rgb(173, 216, 230)" }} >
                    <Row>
                        <img alt="as" src={require('../../Assets/ticket.png')} style={{ width: "100%" }} />
                    </Row>

                    <Row >
                        <Form style={{ margin: "0 auto" }}>
                            <InputGroup className='busticket3'>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>Klienti</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="Emer"
                                    aria-label="Amount (to the nearest dollar)"
                                    name="Emer" onChange={this.HandleFormChange}
                                />
                                <FormControl
                                    placeholder="Mbiemer"
                                    aria-label="Amount (to the nearest dollar)"
                                    name="Mbiemer" onChange={this.HandleFormChange}
                                />
                                <Form.Control as='select'
                                    name="Kategoria" onChange={this.HandleFormChange}>
                                    <option>Kategoria</option>
                                    {this.categoryOptions.map((el) => <option key={el} value={el}>{el}</option>)}
                                </Form.Control>
                                <Form.Control as='select'
                                    name="Zona" onChange={this.HandleFormChange}>
                                    <option>Zona</option>
                                    {this.zoneOptions.map((el) => <option key={el} value={el}>{el}</option>)}
                                </Form.Control>
                                <InputGroup.Append>
                                    <InputGroup.Text>ALL</InputGroup.Text>
                                    <InputGroup.Text>{this.state.Cmimi}</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                        </Form>
                    </Row>
                    <Row>
                        <Button variant="primary" className='buton1' disable={this.disableBtn.toString()}  ><Link disable={this.disableBtn.toString()} style={{ textDecoration: 'none', color: 'inherit' }} to={this.getUrl() || '/urban'}> Bej porosi</Link>
                        </Button>

                    </Row>
                </Jumbotron>
                <h4 className='' style={{ textAlign: "center " }}>INTERVALET DHE NUMRI I AUTOBUZAVE TE LINJAVE PER TRANSPORTIN QYTETAS URBAN
</h4>
                <h4 className='lol' style={{ textAlign: "center " }}>Bashkia Durres</h4>
                <Row>
                    <Col><Table responsive>
                        <thead className='tab'>
                            <tr>
                                <th>EMERTIMI I LINJES</th>
                                <th>FIRMA  OPERUESE</th>
                                <th>INTERVALET KOHORE</th>
                                <th>NUMRI  I MJETEVE</th>
                            </tr>
                        </thead>
                        <tbody className='linjat'>
                            <tr>
                                <td>Durres-Spitalle-Durres</td>
                                <td>IRI TRANS</td>
                                <td>8 minuta</td>
                                <td>8</td>
                            </tr>
                            <tr>
                                <td>Durres-Nishtulla-Durres</td>
                                <td>IRI TRANS</td>
                                <td>7.5 minuta</td>
                                <td>7</td>
                            </tr>
                            <tr>
                                <td>Durres-Currila-Durres</td>
                                <td>IRI TRANS</td>
                                <td>30 minuta</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>Durres-Universiteti A.Moisiu-Durres</td>
                                <td>IRI TRANS</td>
                                <td>15 minuta</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Durres-Plepa-Durres</td>
                                <td>MAREN BUSS</td>
                                <td>6 minuta</td>
                                <td>12</td>
                            </tr>
                            <tr>
                                <td>Durres-Unaze-Kenete-Plepa-Durres</td>
                                <td>MAREN BUSS</td>
                                <td>20 minuta</td>
                                <td>5</td>
                            </tr>
                        </tbody>
                    </Table></Col>
                </Row>
                <Row>
                    <Col style={{ textAlign: "center " }}>
                        <Link disable={this.disableBtn.toString()} >Shiko me shume</Link>
                    </Col>
                </Row>
                <p></p>


            </ Container >
        );
    }

    HandleFormChange = (event) => {
        let StateName = event.target.name
        let StateValue = event.target.value
        this.setState({ [StateName]: StateValue }, () => {
            if (this.state.Kategoria && this.state.Zona) {
                this.Requests.getUrbanData({
                    zona: this.state.Zona,
                    kategoria: this.state.Kategoria
                }).then((res, rej) => {
                    if (res[0]) {
                        this.setState({
                            Cmimi: res[0].pro_cmim
                        })
                    } else {
                        this.setState({
                            error: true
                        })
                    }
                },
                    (rej) => console.error(rej))
            }
        })
        console.table(this.state)

    }

}