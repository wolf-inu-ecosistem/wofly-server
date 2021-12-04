import express from "express";
import cors from "cors";
import imgRoute from './routes/imgRoute.js'

const app = express();
app.use(cors());

app.listen(3000);

/*  upload POST endpoint */
app.use( '/upload', imgRoute );


console.log('server listen on port 3000 XD');
