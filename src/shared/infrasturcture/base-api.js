import axios from 'axios';

const platfromApi= import.meta.env.VITE_LEARNING_PLATAFORM_API_URL;

export class BaseApi {
    #https;
    constructor() {
        this.#http =axios.create({
            baseURL: platfromapi,
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        });
    }

    get http() {
        return this.#http;
    }



}