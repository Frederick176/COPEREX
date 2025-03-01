"use strict"

import Company from "../company/company.model.js"

export const saveCompany = async (req, res) => {
    try{
        const data = req.body

        const company = new Company({
            ...data,

        })

        await company.save()

        res.status(200).json({
            succes: true,
            message: "Empresa guardada con éxito :)"
        })
    }catch(err){
        res.status(500).json({
            succes: false,
            message: "Error al guardar la empresa :(",
            err
        })
    }
}

export const getCompany = async (req, res) => {
    try{
        const { limite = 5, desde = 0} = req.body
        const query = { status : true}

        const [total, company ] = await Promise.all([
            Company.countDocuments(query),
            Company.find(query)
                   .skip(Number(desde))
                   .limit(Number(limite))
        ])

        return res.status(200).json({
            success: true,
            total,
            company
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error al lsitar las empresas",
            error: err.message
        });
    }
}

export const getCompanyList = async (req, res) => {
    try{
        const { limit = 10, from = 0 } = req.query;
        const { listarOrden } = req.body;
        const query = { status: true };

        let ordenOptions = {};

        switch(listarOrden) {
            case "yearsOfExperience":
                ordenOptions = { yearsOfExperience: -1}
                break
            case "companyCategory":
                ordenOptions = { companyCategory: 1}
                break
            case "A-Z":
                ordenOptions = { companyName: 1 }
                break
            case "Z-A":
                ordenOptions = { companyName: -1}
                break 
            default:
                ordenOptions = { createAt: -1}
        }

        const [total, company] = await Promise.all([
            Company.countDocuments(query),
            Company.find(query)
                   .sort(ordenOptions)
                   .skip(Number(from))
                   .limit(Number(limit))
        ])

        return res.status(200).json({
            success: true,
            total,
            company
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error al listar las empresas",
            error: err.message
        })
    }
}