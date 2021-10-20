import { Router } from "express"
import { AuthenticateUserControllers } from "./controllers/AuthenticateUserControllers"
import { CreateMessageController } from "./controllers/CreateMessageController"
import { GetLast3MessagesController } from "./controllers/GetLast3MessagesControler"
import { ProfileUserController } from "./controllers/ProfileUserController"
import { ensureAuthenticate } from "./middleare/ensureAuthenticate"


const router = Router()

router.post("/authenticate", new AuthenticateUserControllers().handle)

router.post("/messages", ensureAuthenticate, new CreateMessageController().handle)

router.get("/messages/last3", new GetLast3MessagesController().handle)

router.get("/profile", ensureAuthenticate, new ProfileUserController().handle)

export { router }

