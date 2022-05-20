import { Router } from "express";
import { categoriesRouters } from "./categories.routers";
import { specificationRouters } from "./specification.routers";

const router = Router();

router.use("/categories", categoriesRouters);
router.use("/specification", specificationRouters);


export { router };


