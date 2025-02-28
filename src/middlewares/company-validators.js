import { body } from "express-validator"
import { validarCampos } from "./validate-fields.js"
import { validateJWT } from "./validate-jwt.js"
import { handleErrors } from "./handle-errors.js"

export const addCompanyValidators = [
    validateJWT,
    body("companyName").notEmpty().withMessage("El nombre de la empresa es requerido"),
    body("impactLevel").notEmpty().withMessage("El nivel de impacto de la empresa es requerido"),
    body("yearsOfExperience").notEmpty().withMessage("Los años de experiencia de la empresa son requeridos"),
    body("companyCategory").notEmpty().withMessage("La categoría de la empresa es requerida"),
    body("companyDescription").notEmpty().withMessage("La descripción de la empresa es requerida"),
    validarCampos,
    handleErrors
]