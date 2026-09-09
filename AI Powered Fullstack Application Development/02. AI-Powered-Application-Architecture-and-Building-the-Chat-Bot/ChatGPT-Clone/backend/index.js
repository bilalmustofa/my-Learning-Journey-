import 'dotenv/config'
import express from "express";
import dbConfig from './db/db.config.js'
import mainRouter from './src/api/main.routes.js';
import { errorHandler } from './src/middleware/error-handler.js'

const app = express();

app.use(express.json());
app.use('/api', mainRouter);


app.use(errorHandler);

// server starter function
async function serverStart() {
  try {

    const connection = await dbConfig.getConnection();
    console.log('DB Connected')
    connection.release();

    app.listen(3000, (err) => {
        if(err){
            throw err;
        }
      console.log("server running on port 3000");
    });

  } catch (error) {
    console.log(error.message)
  }
}

serverStart();