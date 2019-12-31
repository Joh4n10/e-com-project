import React from 'react'
import { useState } from 'react'
import { Modal, Button, Form, Col } from 'react-bootstrap'
export function CheckOutModal(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const mystyle = {
        padding: "10px"
    };
    console.log(props.hey)
    return (
        <>
            <Button variant="primary" style={{ margin: "0 auto" }} onClick={handleShow}>
                Bej porosi
            </Button>

            <Modal size='lg' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Pagese per{/*emri i produktit*/} </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Label>Detaje dergimi</Form.Label>
                        <Form.Row style={mystyle}>
                            <Col>
                                <Form.Control value={props.hey.Emer} readOnly placeholder="Emer" />
                            </Col>
                            <Col>
                                <Form.Control value={props.hey.Mbiemer} readOnly placeholder="Mbiemer" />
                            </Col>
                        </Form.Row>
                        <Form.Row style={mystyle}>
                            <Col>
                                <Form.Control as='select' placeholder="Shteti" >
                                    <option>Shteti...</option>
                                    <option>...</option>
                                </Form.Control>
                            </Col>
                            <Col>
                                <Form.Control placeholder="Qyteti" />
                            </Col>
                        </Form.Row>
                        <Form.Row style={mystyle}>
                            <Col>
                                <Form.Control placeholder="Adresa" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Kodi postar" />
                            </Col>
                        </Form.Row>
                        <Form.Row style={mystyle}>
                            <Col>
                                <Form.Control placeholder="Nr. Telefoni" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Adrese email" />
                            </Col>
                        </Form.Row>

                        <Form.Row style={mystyle}>
                            <Form.Label>Detaje Pagese</Form.Label>
                            <Form.Control as='select' placeholder="Shteti" >
                                <option>Tipi i kartes...</option>
                                <option>Visa</option>
                            </Form.Control>
                        </Form.Row>
                        <Form.Row style={mystyle}>
                            <Col>      <Form.Control placeholder="Numri i kartes" /></Col>
                            <Col>  <Form.Control placeholder="CCV" /></Col>
                        </Form.Row>

                        <Form.Row style={mystyle}>
                            <Form.Label>Data e skadences:</Form.Label>
                        </Form.Row>
                        <Form.Row style={mystyle}>
                            <Col>
                                <Form.Control as='select' placeholder="Muaji" >
                                    <option>Muaji...</option>
                                    <option>...</option>
                                </Form.Control>
                            </Col>
                            <Col>
                                <Form.Control as='select' placeholder="Viti" >
                                    <option>Viti...</option>
                                    <option>...</option>
                                </Form.Control>
                            </Col>
                        </Form.Row>
                        <div className="form-group">
                            <div className="col-md-12">
                                <span>Pay secure using your credit card.</span>
                            </div>
                            <div className="col-md-12">
                                <ul className="cards">
                                    <li className="visa hand">Visa</li>
                                    <li className="mastercard hand">MasterCard</li>
                                    <li className="amex hand">Amex</li>
                                </ul>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Mbyll
                         </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Kryej pagesen
                          </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}