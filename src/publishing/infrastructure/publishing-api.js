import {BaseApi} from "../../shared/infrasturcture/base-api.js";
import {BaseEndpoint} from "../../shared/infrasturcture/base-endpoint.js";
const categoriesEndpointPath= import.meta.env.VITE_CATEGORIES_ENDPOINT_PATH;

export class PublishingApi extends BaseApi{
    #categoriesEndpoint;

    constructor() {
        super();
        this.#categoriesEndpoint= new BaseEndpoint(this, categoriesEndpointPath);
    }
    getCategories(){
        return this.#categoriesEndpoint.getAll();
    }

    getCategoryById(id){
        return this.#categoriesEndpoint.getById(id,resource);
    }

    createCategory(resource){
        return this.#categoriesEndpoint.create(resource);
    }

    updateCategory(id,resource){
        return this.#categoriesEndpoint.update(id,resource);
    }

    deleteCategory(id){
        return this.#categoriesEndpoint(id);
    }



}