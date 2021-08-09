import { BaseApi } from "./baseApi";
/**
 * Authorization Api used for the applicatio
 * @description Authorizer routes needed to have the user log in and log out of the website\
 * @author Ahmad Baderkhan
 */
export class AuthApi extends BaseApi {
    /**
     * constructs the axios base object
     */
    constructor() {
        super()
    }

    /**
     * @description Login route that handles logging in to the page , 
     * will either be true or false if you await it
     * @param {string} username 
     * @param {string} password
     * @returns {Promise<[boolean,string]>} response
     */
    login(username, password) {
        return this._resolve(this._req.post('/login', {
            accountId: username,
            password
        }))
    }
    /**
     * @description Logout route that handles logging out and destroying the cookie
     * will either be true or false with the server message
     * @returns {Promise<[boolean,string]>} response
     */
    logout() {
        return this._resolve(this._req.post('/logout', {}))
    }

}