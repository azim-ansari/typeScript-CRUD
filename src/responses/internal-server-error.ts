import { Response } from "express"

export default function (data): Response {
    const statusCode = 500
    const {
        message = 'Internal Server Error.',
        error = null,
        errors = null
    }: {
        message: string,
        error: any,
        errors: [any]
    } = data


    const resultant = {
            message,
            statusCode,
            errors: errors ? errors : (error ? [error] : undefined),
       
    }


    // All Done
    return this.status(statusCode).json(resultant)
}