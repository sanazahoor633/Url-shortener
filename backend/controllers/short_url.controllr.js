import Shorturl from "../models/shorturl.model.js";
import { nanoid } from "nanoid";
import { generateNanoId } from "../utils/helper.js";
import { createShortUrlWithoutUser } from "../services/short_url.service.js";
import dotenv from 'dotenv'
dotenv.config();



export const createShortUrlfunc =  async (req, res) => {
  const { url } = req.body;
  const shortUrl = await createShortUrlWithoutUser(url);
  res.send(process.env.APP_URL + shortUrl)

}

export const redirectFromShortUrl = async (req, res) =>{
const {id} = req.params
const url = await findUrlFromShortUrl(id);
res.redirect(url)
}