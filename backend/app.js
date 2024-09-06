import express from "express";
import helmet from "helmet"
import config from "./config/index.js";
import db from "./database/index.js";

import {bookRoute} from "./routes/index.js";

config();
db();

const app = express();

app.use(express.json()); 

app.use(
	helmet.frameguard({ action: "SAMEORIGIN", contentSecurityPolicy: false, })
);


app.listen(process.env.APP_PORT, () => {
  console.log(`APP started port ${process.env.APP_PORT}`);
  app.use('/api/v1/books', bookRoute);

  
  app.use(function(req, res, next) {
    res.status(404).json({
        status : 404,
        message:"Not Data Found"
    })
  });
  
  app.use(function(req, res, next) {
    res.status(500).json({
        status : 500,
        message:"Internal Server Error"
    })
  });
  
});