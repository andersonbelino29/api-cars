import { Category } from "../../model/category";
import { ICategoriesRepository } from "../../repositories/ICategoryRepository";

class ListCategoriesUseCase {
    
    constructor(private categoriesRepository : ICategoriesRepository) {}

    excute() : Category[] {
       const categories = this.categoriesRepository.list(); 
       
       return categories;
    };
}

export { ListCategoriesUseCase };