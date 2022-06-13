import 'dotenv/config'
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import postRoutes from './routes/postRoutes.js'

const app = express();
app.use(bodyParser.json({ limit: '50mb', extended: true}))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true}))
app.use(rateLimit({windowMs: 10 * 1000, max: 50, message: {message: 'Too many requests', status: 429,}}))
app.use(compression())
app.use(cors())
app.use('/posts', postRoutes)


const CONNECTION_URL = process.env.MONGO_URL
const PORT = process.env.PORT
mongoose.connect(CONNECTION_URL, { useNewUrlParser:true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Stackchain server running on port: ${PORT}`)))
  .catch((error)=> console.log(error))
