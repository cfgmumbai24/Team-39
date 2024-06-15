import express from 'express';
import { addliteracture } from '../controller/literature.js';

const router = express.Router();

router.post('/literature',addliteracture);