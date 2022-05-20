import { Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { listSpecificationController } from "../modules/cars/useCases/listSpecification";

const specificationRouters = Router();

specificationRouters.post("/" , (request, response) => {
   return createSpecificationController.handle(request, response);
});

specificationRouters.get("/", (request, response) => {
    return listSpecificationController.handle(request, response);   
});


export { specificationRouters };