import { Response } from "express"

export default function (data: { message: string; error: any; errors: [any]; result: number }): Response {
    const statusCode = 422
    const {
        message = 'Unprocessable Entity.',
        error = null,
        errors = null,
    }: {
        message: string,
        error: any,
        errors: [any]
    } = data


    const resultant = {
            message,
            statusCode,
            errors: errors ? errors : (error ? [error] : undefined),
            error
        
    }


    // All Done
    return this.status(statusCode).json(resultant)
}