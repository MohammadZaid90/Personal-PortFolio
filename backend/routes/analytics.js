import express from 'express';
import { logVisit, getStats } from '../controllers/analyticsController.js';
import { adminAuth } from '../middleware/auth.js';

const router = express.Router();

router.post('/visit', logVisit);
router.get('/stats', adminAuth, getStats);

export default router;
