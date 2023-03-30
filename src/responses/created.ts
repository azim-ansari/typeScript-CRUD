import { Response } from "express"

export default function (data): Response {
    const statusCode = 201
    const {
        message = 'Created.',
        item = null,
        items = null
    }: {
        message: string,
        item: any,
        items: [any]
    } = data


    const resultant = {
            message,
            statusCode,
            data: items ? items : (item ? item : undefined)
    }


    // All Done
    return this.status(statusCode).json(resultant)
}