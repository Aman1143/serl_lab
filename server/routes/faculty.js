import express from 'express';
import { createFacultyProject, deleteFaculty, facultyRegister, getAllFacultyProject, getAllfaculty } from '../controllers/Faculty.js';
const router=express.Router();
import {isAuthenticated} from '../middleWares/Auth.js'


router.post('/register',isAuthenticated,facultyRegister);
router.get('/allFaculty',isAuthenticated,getAllfaculty);
router.post('/createProject',isAuthenticated,createFacultyProject);
router.get('/getProject',isAuthenticated,getAllFacultyProject);
router.delete('/delete/faculty/:id',isAuthenticated,deleteFaculty);

export default router; 