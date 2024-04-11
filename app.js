import express from 'express'
const app = express();

import cors from 'cors'
import dataTransfer from './Routes/post.route.js'
import showData from './Routes/ShowData.js'
import deleteData from './Routes/delete.route.js'

app.use(cors());
app.use(express.json());
app.use('/post-data',dataTransfer);
app.use('/',showData);
app.use('/delete-data' ,deleteData)


export default app;