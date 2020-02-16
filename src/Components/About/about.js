import React from 'react';
import '../../App.css';
import './about.css';
import { Col, Row, Container } from 'react-bootstrap'
import { Form, Button } from 'react-bootstrap';

export class About extends React.Component {

    constructor(props) {
        super()
        console.log(props);

    }



    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                    <div className="container">
                        <a className="navbar-brand js-scroll-trigger" href="/"><img alt="as" src={require('../../Assets/bus.png')} style={{ width: "80%" }} /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#about">Rreth nesh</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#services">Sherbimet</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#contact">Kontaktet</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <header className="bg text-white">
                    <div className="container text-center">
                        <h1>Mirësevini ne busticket.al</h1>
                    </div>
                </header>

                <section id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <h2>Rreth nesh</h2>
                                <p className="lead">Bus Ticket është një projekt i realizuar në formën e një biznesi online i cili vjen në ndihmë dhe gjithashtu sjellë risi në këtë sektor. Vetë website-i është krijuar në një mënyrë tepër të thjeshtë për përdoruesit që të jetë aq sa i dobishëm aq dhe praktik.</p>
                                <ul>
                                    <li>Kush qendron pas busticket.al ?</li>
                                </ul>
                                <p className="lead">Ky projekt eshte krijuar nga studente te UAMD - FTI (Johan Dhana & Erblin Isaku) Master profesional Shkenca Kompjuterike te aplikuara (E-COMMERCE & E-BUSINESS)</p>

                            </div>
                        </div>
                    </div>
                </section>

                <section id="services" className="bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <h2 style={{ textAlign: "center" }}>Sherbimet qe ofrohen</h2>
                                <Row>
                                    <Col lg="6">
                                        <ul>
                                            <li>Interurban</li>
                                            <li>Blerje online te biletes</li>
                                            <li>Oraret e udhëtimeve</li>
                                            <li>Raporte/Njoftime (mbi linjat e udhëtimit)</li>
                                            <li>Rezervim të vendit në autobus</li>
                                            <li>Menaxhim i programit të udhëtimit</li>
                                            <li>Menaxhim i destinacionit të udhëtimit</li>
                                            <li>Printim të biletave/rezervimit</li>

                                        </ul>
                                    </Col>
                                    <Col lg="6">
                                        <ul>
                                            <li>Urban</li>
                                            <li>Abone Online</li>
                                            <li>Linjat e udhëtimit të transportit publik</li>
                                            <li>Intervalet e linjave per tranpsortin qytetas</li>
                                            <li>Informacion mbi firmat operuese</li>
                                            <li>Ndarje te cmimit sipas kategorive</li>
                                            <li>Raporte/Njoftime (mbi linjat e udhëtimit)</li>
                                            <li>Monitorim live te vendodhjes se autobusit</li>

                                        </ul>

                                    </Col>

                                </Row>

                                <h6 className="lead1">Disa nga sherbimet e ofruara ende jane te pa perfunduara/realizuara</h6>

                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <h2 style={{ textAlign: "center" }}>Kontakto</h2>
                                {/* <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                                <ul className="list-unstyled list-inline social text-center">
                                    <li className="list-inline-item"><a href="test"><i className="fa fa-facebook"></i></a></li>
                                    <li className="list-inline-item"><a href="test"><i className="fa fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="test"><i className="fa fa-instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="test"><i className="fa fa-google-plus"></i></a></li>
                                    <li className="list-inline-item"><a href="test" target="_blank"><i className="fa fa-envelope"></i></a></li>
                                </ul>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </section>
                <Container>
                    <Row>
                        <Col lg="2"></Col>
                        <Col lg="8"> <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="emri@shembull.com" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Qyteti</Form.Label>
                                <Form.Control as="select">
                                    <option>Tirane</option>
                                    <option>Durres</option>
                                    <option>Berat</option>
                                    <option>Vlore</option>
                                    <option>Shkoder</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Mesazhi</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>
                        </Form>
                            <Button variant="primary" type="submit">
                                Dergo
  </Button></Col>
                        <Col lg="2"></Col>

                    </Row>
                    <p className='p'></p>




                </Container>
            </>
        )

    }


}

