export class Utils {

    static seriliseParams(paramsObj) {
        let params;
        var str = [];
        for (var p in paramsObj)
            if (paramsObj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(paramsObj[p]));
            }
        params = str.join("&");
        return params
    }

}