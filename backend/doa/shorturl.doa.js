import Shorturl from "../models/shorturl.model.js";

export const saveShortUrl = async (shorturl, longUrl, userId) =>{

     const newUrl = new Shorturl({
    full_url: longUrl,
    short_url: shorturl
  })
 if(userId){
    newUrl.user._id = userId;
 }
  
await newUrl.save();
}


export const getShortUrl = async (shortUrl) => {
return await Shorturl.findOne({short_url:shortUrl})
}