import express from 'express';
import { addFoundation } from '../controller/foundation.js';

const router = express.Router();

router.post('/foundation',addFoundation);


