import { CategoriesRepository } from "../../repositories/implementation/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCAtegoryUseCase } from "./CreateCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();

const createCategoryUseCase = new CreateCAtegoryUseCase(categoriesRepository);

const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export { createCategoryController, createCategoryUseCase };