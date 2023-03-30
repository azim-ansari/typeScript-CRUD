import '@core/declarations'
import { FileExistsSync } from './utils'

export interface ConfigInterface {
  HOST: string
  PORT: number
  ENVIRONMENT: string
  DB_CONNECTION_STRING: string
  DB_CONNECTION_OPTIONS: any

  ITEMS_PER_PAGE: number

  SALT_ROUNDS: number
  JWT_SECRET: string
  JWT_EXPIRY: string

  INTERNAL_COMMUNICATION_TOKEN: string

  AWS: {
    ACCESS_KEY_ID: string
    SECRET_ACCESS_KEY: string
    REGION: string
    SES_DEFAULT_FROM_EMAIL: string
    APPLICATION_ID: string
    BRAND_NAME: string
    ORIGINATION_IDENTITY: string
  }

  REDIS: {
    HOST: string
    PORT: number
  }

  FIREBASE: {
    SERVICE_FILE: string
  }

  ZENDESK: {
    TOKEN: string
    USERNAME: string
    REMOTE_URL: string
  }

  TWILIO: {
    SID: string
    TOKEN: string
    FROM: string
  }

  SIGNIN: {
    INVALID_SIGNIN_ATTEMPTS_LIMIT: number
    MULTIPLE_SIGNIN_ATTEMPTS_BLOCK_DURATION: number // in hours
  }
}

export default (): ConfigInterface => {
  const { NODE_ENV = 'development' } = process.env
  const environment = NODE_ENV?.toLowerCase()
  const environmentFileLocation = `${__dirname}/../environments`
  const environmentFilePath = `${environmentFileLocation}/${environment}`
  if (FileExistsSync(environmentFilePath)) {
    // eslint-disable-next-line
    const configuration: ConfigInterface = (require(environmentFilePath).default)()
    return configuration
  } else {
    Logger.error(`Missing environment file for NODE_ENV=${environment}.`)
    throw Error(`Missing environment file for NODE_ENV=${environment}.`)
  }
}
