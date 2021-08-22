import { BaseApi } from "./baseApi";



/**
 * @description Account Api , has access to creating , updating ,
 * deleting  , and viewing accounts
 * 
 * @author Ahmad Baderkhan
 */
export class AccountApi extends BaseApi {
    constructor() {
        super();
    }
    /**
     * @description do a fuzzy search for the account with an approximate account id term
     * @param fuzzySearchWord {string}
     */
    searchAccount(fuzzySearchWord) {
        return this._resolve(this._req.get(`/accounts?search-term=${fuzzySearchWord}`))

    }
    /**
     * @description get specific account by id , this will return 1 record as obj not ar
     * @param id {string} account id
     */
    getAccountById(id) {
        return this._resolve(this._req.get(`/accounts/${id}`))

    }
    /**
     * @description Create a brand new account
     */
    createAccount({
        id,
        password,
        dateOfBirth,
        email,
        name,
        lastName
    }) {
        return this._resolve(this._req.post('/accounts', {
            id,
            password,
            dateOfBirth,
            email,
            name,
            lastName
        }))
    }
    /**
     * @description Delete an account , make sure to spam the user about it
     */
    deleteAccount(accountId) {
        return this._resolve(this.req.delete(`/accounts/${accountId}`))
    }
}