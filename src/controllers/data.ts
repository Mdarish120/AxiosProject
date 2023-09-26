import express from "express"


export const getData=(req:express.Request,res:express.Response)=>{
  

    res.json("hello from controller..")
}