export class BaseRequest {

    // constructor() { }

    url = "http://localhost:4000/home";

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
    async getData(paramsObj) {
        let params = ''
        var str = [];
        for (var p in paramsObj)
            if (paramsObj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(paramsObj[p]));
            }
        params = str.join("&");
        console.log(params)
        const res = await fetch(this.url + "?" + params);
        return await res.json();
    }
}
