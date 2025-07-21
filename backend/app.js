import express from "express";
const app = express();
import { nanoid } from "nanoid";
import fileCabinate from './config/mongo.config.js'
import Shorturl from './models/shorturl.model.js'

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.send("i am sana");
});

app.post("/api/create", async (req, res) => {
  const { url } = req.body;
  const shortUrl = nanoid(7);
  const newUrl = new Shorturl({
    full_url: url,
    short_url: shortUrl
  })
  console.log(newUrl);
  
await newUrl.save();
  res.send(nanoid(5));
});

app.get('/:id', async(req, res)=>{
const {id} = req.params;
const url = await Shorturl.findOne({short_url: id})
if(url){
  res.redirect(url.full_url)
  console.log('sucessfull')
} else {
  res.status(400).json('not found')
}
})



app.listen(2020, () => {
  fileCabinate();
  console.log("server is running on port");
});
