import '@core/declarations'
import { connect, Schema, set} from 'mongoose'
import cachegoose from 'recachegoose'
const ObjectId = Schema.Types.ObjectId

export interface IBaseModel {
  isActive?: boolean
  createdAt?: Date
  updatedAt?: Date
  _createdBy?: typeof ObjectId
  _updatedBy?: typeof ObjectId
}

export class Database {
  private url: string
  private connectionOptions: Record<string, unknown>

  constructor(options: {
    url: string
    connectionOptions?: Record<string, unknown>
  }) {
    const {
      url = 'mongodb://localhost:27017/test',
      connectionOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true
      },
    } = options

    this.url = url
    this.connectionOptions = connectionOptions
  }

  async connect(): Promise<void> {
    set("strictQuery", true)
    const mongoose = await connect(this.url.toString(), this.connectionOptions)
    // cachegoose(mongoose, {
    //   engine: 'redis',
    //   port: App.Config.REDIS.PORT,
    //   host: App.Config.REDIS.HOST,
    // })
    Logger.info(`Database Connected Successfully.`, mongoose)
  }
}

export const ClearCache = (key: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      cachegoose.clearCache(key, resolve)
    } catch (error) {
      reject(error)
    }
  })
}
