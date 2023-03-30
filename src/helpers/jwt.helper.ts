import '@core/declarations'
import jwt from 'jsonwebtoken'

class JWTHelper {
  private JWT_SECRET = App.Config.JWT_SECRET
  private JWT_EXPIRY = App.Config.JWT_EXPIRY

  /**
   * Get token user
   * @param {string} token
   * @returns
   */
  async GetUser(payload: { token: string }) {
    const { token } = payload
    const verification: any = this.VerifyToken(token)

    if (verification) {
      const user = await App.Models.User.findOne({ _id: verification._id })
      delete user?.password
      return user
    }
    return null
  }

  /**
   * Verify the token with rsa public key.
   * @param {string} token
   * @returns string | JwtPayload
   */
  VerifyToken(token: string) {
    try {
      return jwt.verify(token, this.JWT_SECRET, {
      })
    } catch (error) {
      Logger.error(error)
    }
    return null
  }

  /**
   * Create a signed JWT with the rsa private key.
   * @param {*} payload
   * @returns token
   */
  GenerateToken(payload:{}): string {
    return jwt.sign(
      payload,
      this.JWT_SECRET.toString(),
      {
        expiresIn: this.JWT_EXPIRY
      }
    )
  }
}

// All Done
export default new JWTHelper()
