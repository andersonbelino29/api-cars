import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    name : String;
    description : String;
}

class CreateSpecificationUseCase {

    constructor(private specificationRepository : ISpecificationRepository) {};

    excute({ name, description } : IRequest)  : void {
     const specificationAlreadExists = this.specificationRepository.findByName(name);

     if (specificationAlreadExists) {
         throw new Error("Specification alread exists");
     }

     this.specificationRepository.create({
        name,
        description
     });
    }
}

export { CreateSpecificationUseCase };