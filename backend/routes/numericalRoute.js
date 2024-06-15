import express from 'express';
import { addnumerical,getNumerical,updateNumerical } from '../controller/numericalcontroller.js';

const router = express.Router();

router.post('/',addnumerical);
router.get('/',getNumerical);
router.put('/',updateNumerical);
export default router;
