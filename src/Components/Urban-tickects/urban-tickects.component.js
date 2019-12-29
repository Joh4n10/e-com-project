import React from 'react'
import { InputGroup, FormControl, Form } from 'react-bootstrap'
import { CheckOutModal } from '../Modal/modal.component';

export class UrbanTickets extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            Emer: '',
            Mbiemer: '',
            Kategoria: '',

        }
    }

    render() {

        return (
            < div >
                <Form>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text >First and last name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Recipient's username"
                            aria-label="Amount (to the nearest dollar)"
                            name="Emer" onChange={this.HandleFormChange}
                        />
                        <FormControl
                            placeholder="Recipient's username"
                            aria-label="Amount (to the nearest dollar)"
                            name="Mbiemer" onChange={this.HandleFormChange}
                        />
                        <Form.Control as='select'
                            name="Kategori" onChange={this.HandleFormChange}>
                            <option>Johan</option>
                            <option>gf</option>
                        </Form.Control>

                        <InputGroup.Append>
                            <InputGroup.Text>$</InputGroup.Text>
                            <InputGroup.Text>0.00</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>
                <CheckOutModal hey={this.state} />
            </div >
        );
    }

    HandleFormChange = (event) => {
        let StateName = event.target.name
        let StateValue = event.target.value
        this.setState({ [StateName]: StateValue })
    }

}