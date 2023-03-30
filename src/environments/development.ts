import { ConfigInterface } from '@config'

const APP_PORT: number = parseInt(process.env.DEV_PORT)
const DOMAIN_NAME: string = process.env.DOMAIN_NAME ?? 'localhost'
const HTTP_PROTOCOL: string = process.env.HTTP_PROTOCOL ?? 'http'


export default (): ConfigInterface => {
  return {
    HOST:
      process.env.HOST ??
      `${HTTP_PROTOCOL}://${DOMAIN_NAME}${
        APP_PORT == 80 ? '' : `:${APP_PORT}`
      }`,
    PORT: APP_PORT,
    ENVIRONMENT: 'development',
    DB_CONNECTION_STRING: process.env.DEV_DB_CONNECTION_STRING,
    DB_CONNECTION_OPTIONS: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },

    ITEMS_PER_PAGE: parseInt(process.env.ITEMS_PER_PAGE),
    SALT_ROUNDS: parseInt(process.env.SALT_ROUNDS),
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRY: process.env.JWT_EXPIRY,

    INTERNAL_COMMUNICATION_TOKEN: process.env.INTERNAL_COMMUNICATION_TOKEN,

    AWS: {
      ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
      SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
      REGION: process.env.AWS_REGION,
      SES_DEFAULT_FROM_EMAIL: process.env.AWS_SES_DEFAULT_FROM_EMAIL,
      APPLICATION_ID: process.env.AWS_APPLICATION_ID,
      BRAND_NAME: process.env.AWS_BRAND_NAME,
      ORIGINATION_IDENTITY: process.env.AWS_ORIGINATION_IDENTITY,
    },

    

    REDIS: {
      HOST: process.env.REDIS_HOST,
      PORT: parseInt(process.env.REDIS_PORT),
    },

    FIREBASE: {
      SERVICE_FILE: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    },

    ZENDESK: {
      TOKEN: process.env.ZENDESK_ACCESS_TOKEN,
      USERNAME: process.env.ZENDESK_USERNAME,
      REMOTE_URL: process.env.ZENDESK_REMOTE_URL,
    },

    TWILIO: {
      SID: process.env.TWILIO_SID,
      TOKEN: process.env.TWILIO_TOKEN,
      FROM: process.env.TWILIO_FROM,
    },

    SIGNIN: {
      INVALID_SIGNIN_ATTEMPTS_LIMIT: +process.env.SIGNIN_INVALID_ATTEMPTS_LIMIT,
      MULTIPLE_SIGNIN_ATTEMPTS_BLOCK_DURATION:
        +process.env.SIGNIN_MULTIPLE_ATTEMPTS_BLOCK_DURATION, // in hours
    }
  }
}
