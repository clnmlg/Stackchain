import 'dotenv/config'
import cors from 'cors'
import express, { Router } from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import compression from 'compression'
import rateLimit from 'express-rate-limit'
import postRoutes from './routes/postRoutes'
import userRouter from './routes/userRoutes'

const app = express()
app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(
    rateLimit({
        windowMs: 10 * 1000,
        max: 50,
        message: { message: 'Too many requests', status: 429 },
    })
)
app.use(compression())
app.use('/posts', postRoutes)
app.use('/user', userRouter)

const CONNECTION_URL = process.env.MONGO_URL as string
const PORT = process.env.PORT as string
mongoose
    .connect(CONNECTION_URL)
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Stackchain server running on port: ${PORT}`)
        )
    )
    .catch((error) => console.log(error))
