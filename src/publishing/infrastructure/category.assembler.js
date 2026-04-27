export class CategoryAssembler{
    static toEntityFromResource(resource){
        return new Category({...resource});
    }
    static ToEntitiesFromResponse(response){
        if (response.status !==200){
            console.error(`${response.status} ${response.statusText}`);
            return [];
        }

        let resource= response.data instanceof Array
        ? response.data
        : response.data['categories'];
        return resource.map(resorce=>this.toEntityFromResource(resorce));
    }

}