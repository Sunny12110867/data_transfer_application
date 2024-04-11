import dbConnect from './db/index.db.js'
import app from './app.js'

dbConnect()
.then(()=>{
    app.listen(3001,()=>{
        console.log('server is running on port 3001');
    })
})
.catch((err)=>{
    console.log('err while connecting the dbConnection in server.js file',err);
})

