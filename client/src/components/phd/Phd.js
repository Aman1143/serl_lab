import React, { useEffect } from 'react'
import img1 from '../../images/img1.avif'
import '../faculty/Faculty.css'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import { deletePhd, getAllPhd } from '../../action/PhdAction'


const Phd = () => {
	const { loading, allPhds, error } = useSelector((state) => state.allPhd)
	const { user } = useSelector((state) => state.user)
	const dispatch = useDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		dispatch(getAllPhd());
	}, [dispatch, loading]);
	const handleDelete = (id) => {
		dispatch(deletePhd(id, navigate));
	}
	return (
		<>
			<Navbar />
			<div className="card_container">
				<div className="row">
					{
						user?.role === "Phd" && (
							<div className="add_phd">
								<Link to="/addphd"><button type="submit" className='add_member'>Add yourself</button></Link>
							</div>
						)
					}
					{
						allPhds && allPhds?.length > 0 ? (
							allPhds?.map((item) => (
								<div className="card_box">
									<div className="card">
										<div className="name_heading">
											<h2>{item.username}</h2>
											<span>{item.position}</span>
											<p>IIITA</p>
										</div>
										<div className="second_div">
											<div className='image_section'>
												<img src={item.profileImage.url} className='img_box' alt="" />
											</div>
											<div className="address">
												<span>Address:</span>
												<p>{item.address}</p>
												<p>IIITA </p>
												<span>Contact No:</span>
												<p>{item.phone}</p>
											</div>
										</div>
										<div className="econtact">
											<div>
												<span>Email:</span>
												<p>{item.email}</p>
											</div>
											{
												user?.role === 'Admin' && (
													<div>
														<button className='btn' onClick={() => handleDelete(item._id)} >Delete</button>
													</div>
												)
											}
										</div>

									</div>
								</div>
							))
						) : (
							<h1>No one is here</h1>
						)
					}

				</div>
			</div>
			<Footer />
		</>
	)
}

export default Phd
