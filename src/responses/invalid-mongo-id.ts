import { Response } from 'express'

export default function (data = {}): Response {
  const statusCode = 422
  const {
    message = 'Invalid Mongo Id.',
    error = null,
    errors = null,
    item = null,
    items = null,
  }: {
    message?: string
    error?: any
    errors?: any[]
    item?: any
    items?: [any]
  } = data

  const resultant = {
      message,
      statusCode,
      errors: errors ? errors : error ? [error] : undefined,
      data: items ? items : item ? [item] : undefined,
  }

  // All Done
  return this.status(statusCode).json(resultant)
}
