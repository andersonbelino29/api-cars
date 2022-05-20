import { Router } from "express";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { ListCategoriesController } from "../modules/cars/useCases/ListCategories";
import multer from "multer";
import { importCategoryController } from "../modules/cars/useCases/importCategory";

const categoriesRouters = Router();

const upload = multer({
  dest: "./tmp"
});

categoriesRouters.post("/", (request, response) => {
  return createCategoryController.handle(request, response);   
});

categoriesRouters.get("/", (request, response) => {
    return ListCategoriesController.handle(request, response);    
});

categoriesRouters.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
})

export { categoriesRouters };
