import '@core/declarations'
import { Router } from 'express'
import RateLimit from 'express-rate-limit'
import HashGeneratorFromArrayHelper from '@helpers/hash-generator-from-array.helper'
import { authRouter } from '@modules/auth/routes'
import { userRouter } from '@modules/user/routes'

const rateLimiter = RateLimit({
  windowMs: 60 * 1000 * 1, // Time window of 1 minute
  max: 1000, // Max hits allowed
  standardHeaders: false,
  legacyHeaders: false,
  keyGenerator: (req) =>
    HashGeneratorFromArrayHelper.Generate([req.ip, req.originalUrl]),
})

const router = Router()
router.use(rateLimiter)
router.use('/auth', authRouter)
router.use('/user', userRouter)

export const AppRoutes = router
