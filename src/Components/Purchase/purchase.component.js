import React from 'react';
import '../../App.css';
import '../Home/home.component.css';
import { Row, Col, Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'
import { CheckOutModal } from '../Modal/modal.component';


function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function showPurchaseDesc(zona, kategoria, qytetNisje, qytetMberritje) {
    console.log(zona);

    if (kategoria && zona) {
        return <h4>Pagese per abone ne transportin publik te kategorise {kategoria + " dhe zones  " + zona} </h4>;
    } else {
        return <h4>Pagese per bileten nga {qytetNisje + " ne " + qytetMberritje} </h4>;

    }
}

export function PurchaseComponent() {

    let query = useQuery();

    const mystyle = {
        padding: "10px"
    };
    let purchaseDesc = showPurchaseDesc(query.get('zona'), query.get('kategoria'), query.get('qytetNisje'), query.get('qytetMberritje'))

    return (
        <>
            <Row className="m-0">
                {purchaseDesc}
            </Row>
            <Form>
                <Form.Label>Detaje dergimi</Form.Label>
                <Form.Row style={mystyle}>
                    <Col>
                        <Form.Control defaultValue={query.get('Emer') || ''} readOnly={query.get('Emer') !== null} placeholder="Emer" name="Emer" />
                    </Col>
                    <Col>
                        <Form.Control defaultValue={query.get('Mbiemer') || ''} readOnly={query.get('Mbiemer') !== null} placeholder="Mbiemer" name="Mbiemer" />
                    </Col>
                </Form.Row>
                <Form.Row style={mystyle}>
                    <Col>
                        <Form.Control as='select' placeholder="Shteti" name="Shteti" >
                            <option>Shteti...</option>
                            <option>...</option>
                        </Form.Control>
                    </Col>
                    <Col>
                        <Form.Control placeholder="Qyteti" name="Qyteti" />
                    </Col>
                </Form.Row>
                <Form.Row style={mystyle}>
                    <Col>
                        <Form.Control placeholder="Adresa" name="Adresa" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Kodi postar" name="Posta" />
                    </Col>
                </Form.Row>
                <Form.Row style={mystyle}>
                    <Col>
                        <Form.Control placeholder="Nr. Telefoni" name="Tel" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Adrese email" name="Email" />
                    </Col>
                </Form.Row>

                <Form.Row style={mystyle}>
                    <Form.Label>Detaje Pagese</Form.Label>
                    <Form.Control as='select' name="Karta" >
                        <option>Tipi i kartes...</option>
                        <option>Visa</option>
                    </Form.Control>
                </Form.Row>
                <Form.Row style={mystyle}>
                    <Col>      <Form.Control placeholder="Numri i kartes" name="NrKarte" /></Col>
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
            <div className="text-center"><CheckOutModal product={purchaseDesc} /></div>
        </>
    )


}

