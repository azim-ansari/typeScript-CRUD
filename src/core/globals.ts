import Config, { ConfigInterface } from "@config"
import path from "path"
import { Logger } from "./logger"
const config: ConfigInterface = Config()

// Database Models
import { UserModel } from "../models/users.model"
import Messages from "messages-responses"
import { GenerateCallableMessages } from "./utils"
// Export Global Variables
export const Global: any = global
Global.Logger = Logger
Global.App = {
  EXTENSION_ECOSYSTEM: path.extname(__filename) === '.js' ? 'js' : 'ts',
  Http: {
    app: null,
  },
  Config: config,
  Messages: GenerateCallableMessages(Messages),
  Models: {
    User: UserModel
  },
}
