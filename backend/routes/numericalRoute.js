import express from 'express';
import { addnumerical,getNumerical,updateNumerical } from '../controller/numericalcontroller.js';

const router = express.Router();

router.post('/n',addnumerical);
router.get('/n',getNumerical);
router.put('/n',updateNumerical);
export default router;
