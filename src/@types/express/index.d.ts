declare namespace Express {
    export interface Response {
        [key: string]: any // eslint-disable-line
        internalServerError: any
        success: any,
        unauthorized: any
        forbidden:any
        created: any
        badRequest: any
        notFound: any
        tooManyRequests: any
        unprocessableEntity: any
        invalidMongoId: any
        
    }
    export interface Request {
        user: any
    }
}