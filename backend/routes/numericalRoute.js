import express from 'express';
import { addnumerical } from '../controller/numerical.js';

const router = express.Router();

router.post('/num',addnumerical);