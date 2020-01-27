import { UrbanTickets } from '../Components/Urban-tickects/urban-tickects.component.js';
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from '../Components/Home/home.component';
import { InterUrban } from '../Components/Inter-urban/Inter-urban.component.js';
import { PurchaseComponent } from '../Components/Purchase/purchase.component.js';
import { AboutComponent } from '../Components/About/about.component.js';

export function Routing() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/urban" component={UrbanTickets} />
            <Route path="/inter-urban" component={InterUrban} />
            <Route path="/bli" component={PurchaseComponent} />
            <Route path="/about" component={AboutComponent} />

        </Switch>
    );
}
