import { Response, Request } from "express";
import { CreateCAtegoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
   constructor (private createCategoryUseCase : CreateCAtegoryUseCase) {}; 

   handle(request : Request, response : Response) : Response {
    const { name, description } = request.body;      

    this.createCategoryUseCase.excute({name, description});

    return response.status(201).send();
   }
}

export { CreateCategoryController }