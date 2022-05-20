import { SpecificationRepository } from "../../repositories/implementation/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCAse";

const specificationRepository = SpecificationRepository.getInstance();

const createSpecificationUseCase = new CreateSpecificationUseCase(specificationRepository);

const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

export { createSpecificationController, createSpecificationUseCase };