import '@core/declarations'
import { Request, Response, NextFunction } from 'express'
import JWTHelper from '@helpers/jwt.helper'
import { ResponseMessages } from '@core/constants/response-messages'

export const authorize = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.headers.authorization) {
      return res.unauthorized({ message: ResponseMessages.JWT_TOKEN_NOT_FOUND })
    }
    const token = req.headers.authorization.split(' ')[1]
    const user = await JWTHelper.GetUser({ token })

    if (!user) {
      return res.unauthorized()
    }

    req.user = user
    return next()
  } catch (error) {
    Logger.error(error)
    return res.internalServerError({ error })
  }
}
