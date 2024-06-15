import express from 'express';
import { addfoundation,getfoundation,updatefoundation } from '../controller/foundationController.js';
const router = express.Router();

router.post('/',addfoundation);
router.get('/',getfoundation);
router.put('/',updatefoundation);
export default router;

