import express from 'express';
import {
  subscribeNewsletter,
  getNewsletters,
  unsubscribeNewsletter,
} from '../controllers/newsletterController.js';

const router = express.Router();

// POST - Subscribe to newsletter
router.post('/subscribe', subscribeNewsletter);

// GET - Get all newsletters
router.get('/', getNewsletters);

// POST - Unsubscribe from newsletter
router.post('/unsubscribe', unsubscribeNewsletter);

export default router;
