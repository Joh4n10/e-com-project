export class BaseRequest {

    // constructor() { }

    url = "http://localhost:4000/";
    endpoint = '/'
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
    async getData(params, endpoint = '') {
        const res = await fetch(this.url + endpoint + this.endpoint + "?" + params);
        return res.json();
    }

}
