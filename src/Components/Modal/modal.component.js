import React from 'react'
import { useState } from 'react'
import { Modal, Button, Form, Col } from 'react-bootstrap'
export function CheckOutModal(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // console.log(props.hey)
    return (
        <>
            <Button variant="primary" className='buton1' onClick={handleShow} >
                Bej porosi
            </Button>


        </>
    )
}