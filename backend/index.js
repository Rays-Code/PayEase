import express from 'express'
import dotenv from 'dotenv'
import mainRouter from './routes/index.js'
import cors from 'cors'

const app = express()

dotenv.config()

app.use(express.json())
app.use(cors({
    origin: `${process.env.FRONTEND_URL}`,
    methods: ["GET", "POST", "PUT", "DELETE"]
}))

app.use('/api/v1', mainRouter)

// Routes: 
// /api/v1/user
// /api/v1/account






app.listen(3000, () => console.log('Server running on PORT 3000'))