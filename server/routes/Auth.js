import express from 'express';
import { forgotPassword, login, logout, register, resetPassword } from '../controllers/Auth.js';
const router=express.Router();

router.post('/register',register);
router.post('/login',login);
router.post('/password/forgot',forgotPassword);
router.put('/password/reset/:token',resetPassword);
router.get('/logout',logout)
export default router; 