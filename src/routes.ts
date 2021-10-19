import { Router } from "express"
import { AuthenticateUserControllers } from "./controllers/AuthenticateUserControllers"

const router = Router()

router.post("/authenticate", new AuthenticateUserControllers().handle)

export { router }

