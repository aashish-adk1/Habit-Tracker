import express from "express";
import cors from "cors";

const app= express();

const corsConfig = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
};
app.use(cors(corsConfig));
app.options(/.*/, cors(corsConfig));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


export default app;