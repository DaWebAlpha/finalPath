import express from 'express';
import { renderContactForm, contactForm } from '../controller/userController.js';


const router = express.Router();

router.get('/Contact', renderContactForm);
router.post('/Contact', contactForm);

export default router;