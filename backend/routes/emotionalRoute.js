import express from 'express';
import { addEmo,getEmo,updateEmo } from '../controller/emtionalController.js';
const router = express.Router();
router.post('/e',addEmo);
router.get('/e',getEmo);
router.put('/e',updateEmo);
export default router;
