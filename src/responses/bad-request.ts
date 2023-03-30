import { Response } from 'express'

export default function (data = {}): Response {
  const statusCode = 400
  const {
    message = 'Bad Request.',
    error = null,
    errors = null,
  }: {
    message?: string
    error?: any
    errors?: [any]
  } = data

  const resultant = {
      message,
      statusCode,
      errors: errors ? errors : error ? [error] : undefined,
  }

  return this.status(statusCode).json(resultant)
}

