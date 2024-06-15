import dotenv from "dotenv"
import path from "path"


dotenv.config({ path: path.join(process.cwd(), ".env") })



export default {
  PORT: process.env.PORT,
  SALT_PASS: process.env.SALT_PASS,
  ACCESS_TOKEN: process.env.ACCESS_TOKEN
}

