import 'dotenv/config'
import express, { Router } from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import compression from 'compression'
import rateLimit from 'express-rate-limit'
import users from './routes/postRoutes'
import posts from './routes/postRoutes'

const app = express()
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
app.use(cors())
app.use('/posts', posts)
app.use('/user', users)

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
