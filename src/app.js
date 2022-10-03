import express from "express";
import RSVProutes from "./routes/rsvp.routes.js";
import morgan from 'morgan'
import cors from 'cors'

const app = express();
app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(RSVProutes);

export default app;