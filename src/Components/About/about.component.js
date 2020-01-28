import React from 'react';
import '../../App.css';
import '../Home/home.component.css';
import '../Inter-urban/inter-urban.component.css';
import { InterUrbanService } from '../../Services/inter-urban.service'
export class AboutComponent extends React.Component {

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

    render() {
        return (

            <></>
        )

    }


}

