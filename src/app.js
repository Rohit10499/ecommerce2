import express from 'express';
import cors from 'cors'


const app=express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}));

app.use(express.json());


import authRouter from "../routes/auth.routes.js";
import contactRoute from "../routes/contacts.routes.js"
app.use("/api/v1/user",authRouter)
app.use("/api/v1/form",contactRoute)


export {
    app
}