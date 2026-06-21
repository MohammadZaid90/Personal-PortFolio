import express from 'express';
import { body } from 'express-validator';
import { sendMessage, getMessages, updateStatus } from '../controllers/contactController.js';
import { adminAuth } from '../middleware/auth.js';

const router = express.Router();

const validateContact = [
  body('name').trim().notEmpty().withMessage('Name is required').isLength({ max: 100 }),
  body('email').isEmail().withMessage('Valid email is required').normalizeEmail(),
  body('message').trim().notEmpty().withMessage('Message is required').isLength({ max: 2000 }),
  body('subject').optional().trim().isLength({ max: 200 }),
];

router.post('/', validateContact, sendMessage);
router.get('/', adminAuth, getMessages);
router.patch('/:id/status', adminAuth, updateStatus);

export default router;
