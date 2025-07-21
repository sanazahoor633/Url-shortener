import express from 'express';
import { createShortUrlfunc} from '../controllers/short_url.controllr.js';
const router = express.Router();

router.post('/', createShortUrlfunc);
export default router;