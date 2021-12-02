import express from "express";
import firebaseRoute from './routes/firebaseEcample.js'

const app = express();


app.use('/firebase',firebaseRoute );

app.listen(3000);


console.log('server listen on port 3000 XD');