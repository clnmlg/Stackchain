import { Response } from 'express'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

// client request check middleware

const authMiddleware = async (req: any, res: Response, next: any) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const isCustomAuth = token.length < 500

        let decodedData: string | jwt.JwtPayload | any

        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, process.env.JWT_SECRET as string)

            req.userId = decodedData?.id
        } else {
            decodedData = jwt.decode(token)

            req.userId = decodedData?.sub
        }

        next()
    } catch (error) {
        console.log(error)
    }
}

export default authMiddleware
