import { saveShortUrl } from "../doa/shorturl.doa.js";
import Shorturl from "../models/shorturl.model.js";
import { generateNanoId } from "../utils/helper.js";

export const createShortUrlWithoutUser = async (url) => {
  const shortUrl = generateNanoId(8);
  await saveShortUrl(shortUrl.url);
  return shortUrl;
};

export const createShortUrlWithUser = async (url, userId) => {
  const shortUrl = generateNanoId(8);
  await saveShortUrl(url, shortUrl, userId);
  return shortUrl;
};
