import { Router } from "express";
import { addCompanyValidators } from "../middlewares/company-validators.js";
import { saveCompany } from "./company.controller.js";

const router = Router();

router.post("/addCompany", addCompanyValidators, saveCompany)

export default router;