import { Specification } from "../model/Specifications";

interface ICreateSpecificationDTO {
    name : String;
    description : String;
}

interface ISpecificationRepository {
    create({ name, description} : ICreateSpecificationDTO) : void;    
    list() : Specification[];
    findByName(name : String) : Specification;
}

export { ICreateSpecificationDTO, ISpecificationRepository};