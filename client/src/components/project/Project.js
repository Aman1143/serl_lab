import React, { useEffect, useState } from 'react'
import './Project.css'
import img1 from '../../images/img1.avif'
import { useSelector, useDispatch } from 'react-redux'
import {  getAllPhdProjects } from '../../action/PhdAction'
import { Link } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Researchs from '../../pages/research/Researchs'
import { getAllFacultyProjects } from '../../action/FacultyAction'

const Project = () => {
	const dispatch = useDispatch();
	const { loading, allPhdProject, error } = useSelector((state) => state?.allPhdProjects)
	const {allFacultyProject,loading:facultyloading}=useSelector((state)=>state?.allFacultysProject)
	const { isAuthenticated, user } = useSelector((state) => state?.user);
	useEffect(() => {
		dispatch(getAllPhdProjects());
	}, [dispatch])

	useEffect(()=>{
          dispatch(getAllFacultyProjects())
	},[dispatch]);
	return (
		<>
		
			<Navbar />
			<div className="post_option">
				{
					( user?.role === 'Phd') && (
						<div className="view">
							<a href='/addProject'>Phd? share your project</a>
						</div>
					)
				}
				{
					(user?.role === "Faculty") && (
						<div className="view">
							<a href='/addFacultyProject'>Faculty? share your project</a>
						</div>
					)
				}
			</div>
			<div className="posts_container">
				{
					allPhdProject && allPhdProject?.length > 0 ? (
						allPhdProject?.map((item) => (
							<div className="main_container">
								<div className="description">
							     	<p style={{fontWeight:'500',color:'red'}}>Description:</p>
									<p style={{textIndent:'15%'}} >{item.description}</p>
								</div>
								<div className="button1">
									<div className="mentor">
										<span className='design'>Mentor: </span>
										<span className='higher'>{item.mentor}</span>
									</div>
									<div className="publisher">
										<span className='design'>Publisher:</span>
										<span className='higher'>{item.publisher}</span>
									</div>
								</div>
								<div className="button2">
									<a href={item.link} className='btn view'>View More</a>
								</div>
							</div>
						))
					) : (
						<h1>No phd post is here yet</h1>
					)
				}
			</div>



			        <div className="posts_container">
				{
					allFacultyProject && allFacultyProject.length > 0 ? (
						allFacultyProject.map((item) => (
							<div className="main_container">
								<div className="description">
								   <p style={{fontWeight:'500',color:'red'}}>Description:</p>
									<p style={{textIndent:'15%'}}>{item.description}</p>
								</div>
								<div className="button1">
									<div className="publisher">
										<span className='design'>Publisher:</span>
										<span className='higher'>{item.publisher}</span>
									</div>
								</div>
								<div className="button2">
									<a href={item.link} className='btn view'>View More</a>
								</div>
							</div>
						))
					) : (
						<h1>No faculty post yet</h1>
					)
				}
		     	</div>
			<Footer />
		</>
	)
}

export default Project