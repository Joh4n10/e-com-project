import { BaseRequest } from './base-request.service';
import { Utils } from './utils';

export class InterUrbanService extends BaseRequest {

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
        const res = await this.getData('inter-urban/departures', params);
        return res;
    }
    async getArrivalsData() {
        const params = ''
        const res = await this.getData('inter-urban/arrivals', params);
        return res;
    }
    async getBusList(paramsObj) {
        const params = Utils.seriliseParams(paramsObj)
        const res = await this.getData('inter-urban/list', params);
        return res;
    }

}
