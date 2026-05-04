import express from 'express';
import {
  createContact,
  getContacts,
  getContact,
  updateContactStatus,
  deleteContact,
} from '../controllers/contactController.js';

const router = express.Router();

// POST - Create contact
router.post('/', createContact);

// GET - Get all contacts
router.get('/', getContacts);

// GET - Get single contact
router.get('/:id', getContact);

// PUT - Update contact status
router.put('/:id', updateContactStatus);

// DELETE - Delete contact
router.delete('/:id', deleteContact);

export default router;
