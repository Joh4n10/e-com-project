import { UrbanTickets } from '../Components/Urban-tickects/urban-tickects.component.js';
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from '../Components/Home/home.component';

export function Routing() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/urban" component={UrbanTickets} />
        </Switch>
    );
}
