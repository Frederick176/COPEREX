import { Router } from "express";
import { addCompanyValidators } from "../middlewares/company-validators.js";
import { saveCompany, getCompany, getCompanyList } from "./company.controller.js";

const router = Router();

router.post("/addCompany", addCompanyValidators, saveCompany)

router.get("/", getCompany)

router.get("/list", getCompanyList)

export default router;