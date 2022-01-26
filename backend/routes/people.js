import express from 'express';
import { getPersonById, getAllPeople } from '../controllers/people.js';

const router = express.Router();

router.get('/people/', getAllPeople);
router.get('/people/:id', getPersonById);

export default router;