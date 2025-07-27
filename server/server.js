import express from 'express';
import dotenv from 'dotenv';
import { notFound } from './middleware/notFound.js';
import { handleError } from './middleware/handleError.js';
import router from './routes/userRoutes.js';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 5,
    message: "Too many requests. Please try again later"

})

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: false}))


app.get('/', (req, res)=>{
    res.send("Home Page");
})


app.use('/api', limiter,router);

app.use(notFound);
app.use(handleError);


app.listen(PORT, ()=>{
    console.log(`Listening on PORT ${PORT}`);
})