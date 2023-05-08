import {configureStore} from '@reduxjs/toolkit'
import {
    userReducer
,} from './reducers/AuthReducers'
import { allFacultyPostsReducers, allFacultyReducers, deleteFacultyReducers, facultyReducer, getAllFacultyProjectsReducers } from './reducers/FacultyReducers';
import {  allPhdPostsReducers, allPhdReducers, deletePhdProjectReducers, deletePhdReducers, getAllPhdProjectsReducers, phdReducer } from './reducers/PhdReducers';

const store=configureStore({
    reducer:{
        user:userReducer,
        faculty:facultyReducer,
         phd: phdReducer,
         allPhd:allPhdReducers,
         phdPosts:allPhdPostsReducers,
         allPhdProjects:getAllPhdProjectsReducers,
         deltPhdProject:deletePhdProjectReducers,
         allFacultyProfile:allFacultyReducers,
         facultyPosts:allFacultyPostsReducers,
         allFacultysProject:getAllFacultyProjectsReducers,
         delteFaculty:deleteFacultyReducers,
         deltePhd:deletePhdReducers,
    }
    
})

export default store;