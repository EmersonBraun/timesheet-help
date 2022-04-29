'use strict';

// import { readFile, writeFile } from 'fs/promises';
import excelToJson from 'convert-excel-to-json';
import { readdir } from 'fs/promises';
import xlsx from 'json-as-xlsx';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { DataProcessorFacade } from './dataProcessorFacade.js';



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const IN_FOLDER = './../in'
const OUT_FOLDER = './../out'

const resolveFolder = (folder) => join(__dirname, ...folder)

const getFileList = async () => {
    const filesInFolder = await readdir(resolveFolder([IN_FOLDER]))
    return filesInFolder.filter((allFilesPaths) => allFilesPaths.match(/\.xls$/) !== null)
}

const convertExcelToJson = (fileName) => {
    return excelToJson({
        sourceFile: resolveFolder([IN_FOLDER, fileName])
    });
}

const getName = () => {
    const date = new Date()
    const month = ('00' + date.getMonth()).slice(-2)
    return `timesheet-${date.getFullYear()}-${month}`
}

const exportToExcel = (data) => {
        let settings = {
            fileName: resolveFolder([OUT_FOLDER, getName()]),
            extraLength: 3, // A bigger number means that columns will be wider
            writeOptions: {}, // Style options from https://github.com/SheetJS/sheetjs#writing-options
          }
          //console.log(JSON.stringify(data)) 
          xlsx(data, settings)
}

;(async () => {
    const validFiles = await getFileList()
    for await(const file of validFiles) {
        try {
            const jsonData = convertExcelToJson(file)
            const dataProcessorFacade = new DataProcessorFacade(jsonData)
            const data = await dataProcessorFacade.getDataFromText()
            exportToExcel(data)
            console.log(`${getName()} generated`)
        } catch (error) {
            console.error(error)
        }
    }
})()