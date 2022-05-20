import { SpecificationRepository } from "../../repositories/implementation/SpecificationRepository";
import { ListSpecificationController } from "./ListSpecficicationController";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

const specificationRepository = SpecificationRepository.getInstance();

const listSpecificationUseCase = new ListSpecificationUseCase(specificationRepository);

const listSpecificationController = new ListSpecificationController(listSpecificationUseCase);

export { listSpecificationController, listSpecificationUseCase };