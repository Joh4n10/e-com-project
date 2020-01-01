import React from 'react'
import { InputGroup, FormControl, Form, Container, Row } from 'react-bootstrap'
import { CheckOutModal } from '../Modal/modal.component';

export class UrbanTickets extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            Emer: '',
            Mbiemer: '',
            Kategoria: '',
            Zona: '',
            Cmimi: null

        }
    }

    categoryOptions = ['Femije', 'PAK', 'Te rritur', 'Te moshuar']

    componentDidMount() {
        fetch("http://localhost:4000/home")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    // this.setState({
                    //     isLoaded: true,
                    //     items: result.items
                    // });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    render() {

        return (
            < Container >
                <Row >
                    <Form>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text >Klienti</InputGroup.Text>
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
                                <option>gf</option>
                            </Form.Control>
                            <InputGroup.Append>
                                <InputGroup.Text>$</InputGroup.Text>
                                <InputGroup.Text>{this.state.Cmimi}</InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form>
                    <CheckOutModal hey={this.state} />
                </Row>
            </ Container >
        );
    }

    HandleFormChange = (event) => {
        let StateName = event.target.name
        let StateValue = event.target.value
        this.setState({ [StateName]: StateValue }, () => {
            if (this.state.Kategoria && this.state.Zona) {
                this.setState({
                    Cmimi: 20
                })
            }
        })
        console.table(this.state)

    }

}