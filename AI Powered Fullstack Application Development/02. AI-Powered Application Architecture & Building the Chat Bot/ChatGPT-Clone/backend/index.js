import 'dotenv/config'
import express from "express";
import dbConfig from './db/db.config.js'

const app = express();

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

serverStart()