import dotenv from "dotenv";
import express from "express";
dotenv.config();

const expressApp = express();
expressApp.use(express.json());
expressApp.post("/campus/:name",(req,res)=>{
    let object = {
        DATA: req.body,
        URL: req.query,
        PARAM: req.params
    }
    res.send(object);
});

let config = JSON.parse(process.env.MY_CONFIG);
expressApp.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});
