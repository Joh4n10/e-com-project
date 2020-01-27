import React from 'react'
import { useState } from 'react'
import { Modal, Button, Alert } from 'react-bootstrap'
export function CheckOutModal(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(props)
    return (
        <>
            <Button variant="primary" className='buton1' style={{ margin: "0 auto" }} onClick={handleShow} >
                Bej pagesen
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.product}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Alert variant="success">Pagesa u krye me sukses</Alert>
                    <div className="text-center" ><img alt="as" src={require('../../Assets/QR_code.png')} style={{ width: "70%" }} /></div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}