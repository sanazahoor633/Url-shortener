import express from "express";
const app = express();
import { nanoid } from "nanoid";
import fileCabinate from './config/mongo.config.js'
import Shorturl from './models/shorturl.model.js'
import shortUrlRoute from './routes/short_url.route.js'
import { redirectFromShortUrl } from "./controllers/short_url.controllr.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.send("i am sana");
});

app.use("/api/create", shortUrlRoute);

app.get('/:id', redirectFromShortUrl)



app.listen(2020, () => {
  fileCabinate();
  console.log("server is running on port");
});


async(req, res)=>{
// const {id} = req.params;
// const url = await Shorturl.findOne({short_url: id})
// if(url){
//   res.redirect(url.full_url)
//   console.log('sucessfull')
// } else {
//   res.status(400).json('not found')
// }
}