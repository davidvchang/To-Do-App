import express from 'express'
import morgan from 'morgan'

import tasksRoutes from './routes/tasks.routes.js'
import usersRoutes from './routes/users.routes.js'

const app = express()

app.set('port', process.env.PORT || 4000)

app.use(morgan("dev"))
app.use(express.json())

app.use("/api/tasks", tasksRoutes)
app.use("/api/users", usersRoutes)

export default app