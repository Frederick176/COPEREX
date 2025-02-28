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