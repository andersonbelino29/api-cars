import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";


class listCategoriesController {
    constructor (private listCategoryUseCase : ListCategoriesUseCase) {}; 
    
    handle (request : Request, response : Response) : Response {
     const all = this.listCategoryUseCase.excute();
     
     return response.status(200).json(all);
  }
}

export { listCategoriesController };