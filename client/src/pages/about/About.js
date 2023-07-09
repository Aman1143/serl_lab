import React from 'react'
import './About.css'
import Navbar from '../../components/navbar/Navbar'
import Aswani from '../../images/Ashwani.jpg'
import saurav from '../../images/saurav.jpg'
import satyam from '../../images/satyam.jpg'
import sindhu from '../../images/sindhu.jpg'
import aman from '../../images/aman.jpeg'
const About = () => {
	return (
		<>
		<Navbar />
			<div className="about_page">
				<div className="meet_box">
					<h2 id="meet"><strong>Meet the Team</strong></h2>
				</div>
				<div id="Team">
					<div class="about_container">
						<div class="about_card">
							<div class="about_content">
								<div class="imgBx">
									<img src={aman} alt="" />
								</div>
								<div class="contentBx">
									<h4>Aman Nanda</h4>
									<h5>Developer</h5>
								</div>
								<div class="sci">
									<a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
									<a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
									<a href="#"><i class="fa fa-envelope" aria-hidden="true"></i></a>
								</div>
							</div>
						</div>
						{/* </div> */}



						<div class="about_card">
							<div class="about_content">
								<div class="imgBx">
									<img src={sindhu} alt="" />
								</div>
								<div class="contentBx">
									<h4>Sindhu</h4>
									<h5>Developer</h5>
								</div>
								<div class="sci">
									<a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
									<a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
									<a href="#"><i class="fa fa-envelope" aria-hidden="true"></i></a>
								</div>
							</div>
						</div>



						<div class="about_card">
							<div class="about_content">
								<div class="imgBx">
									<img src={saurav} alt="" />
								</div>
								<div class="contentBx">
									<h4>Saurav Kumar</h4>
									<h5>Developer</h5>
								</div>
								<div class="sci">
									<a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
									<a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
									<a href="#"><i class="fa fa-envelope" aria-hidden="true"></i></a>
								</div>
							</div>
						</div>


						<div class="about_card">
							<div class="about_content">
								<div class="imgBx">
									<img src={Aswani} alt="" />
								</div>
								<div class="contentBx">
									<h4>Ashwani Jha</h4>
									<h5>Developer</h5>
								</div>
								<div class="sci">
									<a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
									<a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
									<a href="#"><i class="fa fa-envelope" aria-hidden="true"></i></a>
								</div>
							</div>
						</div>

						<div class="about_card">
							<div class="about_content">
								<div class="imgBx">
									<img src={satyam} alt="" />
								</div>
								<div class="contentBx">
									<h4>Satyam Thakur</h4>
									<h5>Developer</h5>
								</div>
								<div class="sci">
									<a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
									<a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
									<a href="#"><i class="fa fa-envelope" aria-hidden="true"></i></a>
								</div>
							</div>
						</div>
					</div>
				</div >
				<div id="bottom">
					<h1>Contact us</h1>
					<p>SERL - Software Engineering Research Lab , CC-3</p>
					<p>Indian Institute of Information Technology Allahabad</p>
					<p>Devghat, Jhalwa, Allahabad-211015, U. P. INDIA</p>
					<p>Phone: 91-532-2922000, Fax: 91-532-2922125,Email: contact@iiita.ac.in</p>
				</div>
			</div>

		</>
	)
}

export default About