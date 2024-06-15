import express from 'express';
import { addLiterature,getLiterature,updateLiterature } from '../controller/literatureController.js';

const router = express.Router();

router.post('/l',addLiterature);
router.get('/l',getLiterature);
router.patch('/l',updateLiterature);
export default router;
