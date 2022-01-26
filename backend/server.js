import express from 'express';
import cors from 'cors';
import peopleRouter from './routes/people.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 4000;

app.use('', peopleRouter);

app.use((req, res, next) => {
    return res.status(404).json({
        error: {
            message: "Not found!"
        }
    })
})
app.listen(port, () => {
    console.log('Server started on port ', port);
})