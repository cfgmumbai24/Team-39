import express from 'express';
import { addLiterature,getLiterature,updateLiterature } from '../controller/literatureController.js';

const router = express.Router();

router.post('/',addLiterature);
router.post('/l',getLiterature);
router.put('/',updateLiterature);
export default router;
