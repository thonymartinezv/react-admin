import { getToken } from './Token'
import {SERVER} from '../config/config'

export default class Users {

    url
    constructor() {
        this.url = SERVER+"api/"
    }
    async current(){
        var token = getToken()
        const response = await fetch(this.url+'user/current', {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            }
        })
        return response.json()
    }

    async logged(){
        var token = getToken()
        const response = await fetch(this.url+'logged_admin', {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            }
        })
        return response.text()
    }

    async login(email, password){
        var data = {email,password}
        console.log(this.url);
        const response = await fetch(this.url+'login_admin', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        return response.json()
    }
}