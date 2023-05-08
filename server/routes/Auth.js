import express from 'express';
import { forgotPassword, login, logout, register, resetPassword } from '../controllers/Auth.js';
const router=express.Router();

router.post('/register',register);
router.post('/login',login);
router.post('/password/forgot',forgotPassword);
// router.post('/password/forgot',(req,res)=>{
// 	console.log("hello w23ew");
// 	res.send("hello  werfwe");
// })
router.put('/password/reset/:token',resetPassword);
router.get('/logout',logout)
export default router; 