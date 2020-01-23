import { BaseRequest } from './base-request.service';
import { Utils } from './utils';

export class InterUrbanService extends BaseRequest {

    constructor() {
        super()
    }


    async postData(data = {}) {
        // Default options are marked with *
        const response = await fetch(this.url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            referrerPolicy: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return await response.json(); // parses JSON response into native JavaScript objects
    }
    async getDeparturesData() {
        const params = ''
        const res = await this.getData(params, 'inter-urban/departures');
        return res;
    }
    async getArrivalsData() {
        const params = ''
        const res = await this.getData(params, 'inter-urban/arrivals');
        return res;
    }
    async getBusList(paramsObj) {
        this.url += 'inter-urban/list'
        const params = Utils.seriliseParams(paramsObj)
        const res = await this.getData(params);
        return res;
    }

}
