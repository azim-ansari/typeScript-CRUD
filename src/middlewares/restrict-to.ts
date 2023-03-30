import '@core/declarations'
import { Role } from '@core/constants/roles'
import { ResponseMessages } from '@core/constants/response-messages'
import { Request, Response, NextFunction } from 'express'

export const restrictTo = (...roles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { user: __user } = req

      // Skip if the the account is Super User Account
      if (__user.accountType === Role.SUPER_ADMIN) {
        return next()
      }

      const found = roles.includes(__user.accountType)
      if (!found) {
        return res.unauthorized({
          message: ResponseMessages.UNAUTHORIZED_ACTION,
        })
      }
      return next()
    } catch (error) {
      Logger.error(error)
      return res.internalServerError({ error })
    }
  }
}
