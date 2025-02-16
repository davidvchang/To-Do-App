import {Router} from 'express'
import userController from '../controllers/tasks.controller.js'

const router = Router()

router.get("/", userController.getAllTasks)

export default router