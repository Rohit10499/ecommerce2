import express from "express";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json());

import authRouter from "../routes/auth.routes.js";
import contactRoute from "../routes/contacts.routes.js";
import serviceRoute from "../routes/service.routes.js";
import adminRoute from "../routes/admin.routes.js";
app.use("/api/v1/user", authRouter);
app.use("/api/v1/form", contactRoute);
app.use("/api/v1/data", serviceRoute);
app.use("/api/v1/admin", adminRoute);

export { app };
