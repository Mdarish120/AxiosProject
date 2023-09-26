import express from "express";
import dataRouter from "./routes/data";


const app=express();


app.use(express.json());


app.use("/", dataRouter);
app.listen(5003);
console.log(5003);