import { Response } from "express"

export default function (data): Response {
    const statusCode = 200
    const {
        message = 'Success.',
        item = null,
        items = null,

        // Pagination Related Fields
        totalItems,
        startIndex,
        itemsPerPage,
    }: {
        message: string,
        item: any,
        items: [any],

        // Pagination Related Fields
        totalItems?: number
        startIndex?: number
        itemsPerPage?: number
        totalPage: number
    } = data


    const resultant = {
        
            message,
            statusCode,

            // Pagination Related Fields
            
            totalItems,
            startIndex,
            itemsPerPage,
            totalPage : Math.ceil(totalItems/itemsPerPage),
            data: items ? items : (item ? item : undefined)
        
    }


    // All Done
    return this.status(statusCode).json(resultant)
}