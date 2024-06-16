import express from 'express';
import { addEmo,getEmo,updateEmo } from '../controller/emtionalController.js';
const router = express.Router();
router.post('/',addEmo);
router.post('/',getEmo);
router.put('/',updateEmo);
export default router;
