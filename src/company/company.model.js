import { Schema, model, version } from "mongoose";

const companySchema = Schema({
    companyName: {
        type: String,
        required: [true, "El nombre de la empresa es requerido"],
        maxLength: [30, "El nombre de la empresa no puede exceder los 30 caracteres"]
    },
    impactLevel: {
        type: String,
        required: [true, "El nivel de impacto de la empresa es requerido"],
        maxLength: [50, "El nivel de impacto de la empresa no puede exceder los 50 caracteres"]
    },
    yearsOfExperience: {
        type: String,
        required: [true, "Los años de experiencia de la empresa son requeridos"],
        unique: true
    },
    companyCategory: {
        type: String,
        required: [true, "La categoría de la empresa es requerida"],
        maxLength: [50, "La categoría de la empresa no puede exceder los 50 caracteres"]
    },
    companyDescription: {
        type: String,
        required: [true, "La descripción de la empresa es requerida"],
        maxLength: [500, "La descripción de la empresa no puede exceder los 500 caracteres"]
    },
    companyPhone: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 8
    },
    status: {
        type: Boolean,
        default: true
    }
},
{
    versionKey: false,
    timeStamps: true
})

export default model("Company", companySchema);