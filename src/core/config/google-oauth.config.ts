import { registerAs } from "@nestjs/config"

export default registerAs("googleoAuth", ()=> ({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,  
    callbackUrl: process.env.GOOGLE_CALLBACK_URL
}))