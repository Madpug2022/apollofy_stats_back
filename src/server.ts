import express from 'express';
import morgan from 'morgan';
import cors from 'cors'


//Create an express application
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"))



export default app;
