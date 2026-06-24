import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT;

const jsonData={
  "user_id": 1024,
  "username": "coder_99",
  "email": "coder99@example.com",
  "is_active": true,
  "account_balance": 250.75,
  "roles": ["developer", "admin"],
  "created_at": "2026-06-24",
  "timezone": "GMT+5:45",
  "login_attempts": 0
}


app.get('/', (req, res) => {
  res.json(jsonData);
});

app.get("/twitter", (req,res)=>{
    res.send("Hello Twiter");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});