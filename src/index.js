import express from "express";
import cors from "cors";
import firebaseRoute from './routes/firebaseEcample.js'
import imgRoute from './routes/imgRoute.js'

const app = express();
app.use(cors());

app.listen(3000);

app.use('/firebase',firebaseRoute );
/*  upload POST endpoint */
app.use( '/upload', imgRoute );


console.log('server listen on port 3000 XD');
