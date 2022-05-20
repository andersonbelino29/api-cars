import { Specification } from "../../model/Specifications";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

class ListSpecificationUseCase {
    
    constructor(private categoriesRepository : ISpecificationRepository) {}

    excute() : Specification[] {
       const categories = this.categoriesRepository.list(); 
       
       return categories;
    };
}

export { ListSpecificationUseCase };