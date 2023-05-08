import express from 'express';
import { createPhdProject, deletePhd, getAllPhd, getAllPhdProject, phdRegister } from '../controllers/phd.js';
import { isAuthenticated } from '../middleWares/Auth.js';
const router=express.Router();

router.post('/register',phdRegister)
router.get('/allPhd',getAllPhd)
router.post('/createProject',createPhdProject);
router.get('/getProject',getAllPhdProject);
router.delete('/delete/phd/:id',deletePhd);
export default router; 