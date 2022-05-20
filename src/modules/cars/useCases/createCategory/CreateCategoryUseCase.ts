import { ICategoriesRepository } from "../../repositories/ICategoryRepository";

interface IRequest {
    name : string;
    description : string;
}

class CreateCAtegoryUseCase {

    constructor(private categoriesRepository : ICategoriesRepository) {}

    excute({ description, name} : IRequest) : void {
        
        const categoryalreadyExists = this.categoriesRepository.findByName(name);

        if (categoryalreadyExists) {           
           throw new Error("Category already Exists");
        }
    
        this.categoriesRepository.create({ name, description });
    };

}

export { CreateCAtegoryUseCase };