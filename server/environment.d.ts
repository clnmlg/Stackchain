declare global {
    namespace NodeJS {
        interface ProcessEnv {
            JWT_SECRET?: Secret
            PORT?: string
            MONGO_URL: string
        }
    }
}
export {}
