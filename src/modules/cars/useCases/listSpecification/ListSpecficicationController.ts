import { Request, Response } from "express";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";


class ListSpecificationController {
    constructor (private ListSpecificationUseCase : ListSpecificationUseCase) {}; 
    
    handle (request : Request, response : Response) : Response {
     const all = this.ListSpecificationUseCase.excute();
     
     return response.status(200).json(all);
  }
}

export { ListSpecificationController };