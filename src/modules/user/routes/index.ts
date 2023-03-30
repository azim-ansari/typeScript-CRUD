import '@core/declarations'
import { Router } from 'express'
import { Wrap } from '@core/utils'
import UserController from '../controllers'

const userController = new UserController()
const router = Router()

router.post('/profile/update-2fa', Wrap(userController.TwoFactorAuthenticationSetting))


export const userRouter = router