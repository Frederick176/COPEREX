import ExcelJS from "exceljs"
import { dirname, join } from "path"
import { fileURLToPath } from "url"
import fs from "fs"

const CURRENT_DIR = dirname(fileURLToPath(import.meta.url))

export const generateExcel = async (company) => {
    const workbook = new ExcelJS.Workbook()
    const worksheet = workbook.addWorksheet('Company')

    worksheet.columns = [
        { header: 'ID', key: 'id', width: 10 },
        { header: 'Nombre', key: 'nombre', width: 30 },
        { header: 'Estado', key: 'estado', width: 10 },
    ]

    company.forEach(company => {
        worksheet.addRow({
            id: company._id,
            nombre: company.name,
            estado: company.status ? 'Activo' : 'Inactivo'
        })
    })

    const dir = join(CURRENT_DIR, 'reportsExcel')
    if(!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true})

    }

    const filePath = join(dir, `company_${Date.now}.xlsx`)
    await workbook.xlsx.writeFile(filePath);

    return filePath
}