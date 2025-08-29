import {Router} from "express"
import account from "./Auth.js"
let router = Router()

router.all("/auth" , account)

export default router