import {Router} from 'express'
import usersController from '../controllers/users.controller.js'

const router = Router()

router.post("/", usersController.registerUser)

router.post("/login")

export default router