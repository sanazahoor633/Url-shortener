import express from "express";
const app = express();
import { nanoid } from "nanoid";
import fileCabinate from './config/mongo.config.js'

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("i am sana");
});

app.post("/create", (req, res) => {
  const { url } = req.body;
  console.log(url);
if(!url) return res.status(500).json('url not generated')
  res.send(nanoid(5));
});

app.listen(2020, () => {
  fileCabinate();
  console.log("server is running on port");
});
