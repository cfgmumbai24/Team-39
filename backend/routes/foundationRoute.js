import express from 'express';
import { addfoundation,getfoundation,updatefoundation } from '../controller/foundationController.js';
const router = express.Router();

router.post('/f',addfoundation);
router.get('/f',getfoundation);
router.put('/f',updatefoundation);
export default router;

