import axios from 'axios';
const { REACT_APP_S3_API_DOMAIN } = process.env
/**
 * @description Base api class that has the http handler setup to be universal
 * @author Ahmad Baderkhan
 */
export class BaseApi {
    constructor() {
        this._req = axios.default.create({
            baseURL: REACT_APP_S3_API_DOMAIN
        });
    }
    /**
     * @description resolve the api promise
     */
    _resolve(promise) {
        return promise
            .then(({ data }) => [true, data])
            .catch(({ response }) => [false, response.data])
    }
}