import React from 'react'
import { InputGroup, FormControl, Form, Container, Row, Button } from 'react-bootstrap'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { UrbanService } from '../../Services/urban-handle.service';
import { Link } from 'react-router-dom';
import { Utils } from '../../Services/utils';
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
                                    <InputGroup.Text>$</InputGroup.Text>
                                    <InputGroup.Text>{this.state.Cmimi}</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                        </Form>
                    </Row>
                    <Row>
                        <Button variant="primary" className='buton1' disable={this.disableBtn}  ><Link disable={this.disableBtn} style={{ textDecoration: 'none', color: 'inherit' }} to={this.getUrl()}> Bej porosi</Link>
                        </Button>

                    </Row>
                </Jumbotron>
                <h1 className='lol' style={{ textAlign: "center " }}>Cooming Soon</h1>
                <p className='lol1' style={{ textAlign: "center " }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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