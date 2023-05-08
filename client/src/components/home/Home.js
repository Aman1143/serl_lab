import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import './Home.css'

const Home = () => {
	return (
		<>
		<div>
		<Navbar />
			<section class="home content" id="home">
				<h1 class="h-primary main"></h1>
				<p>The mission of this initiative is to establish a research lab of an industrial repute through various scholarly activities such as development of software tools,</p>
				<p>Big thinking precedes great achievement." </p>
				<button class="btn" >
					Know More
				</button>
			</section>
			<div className="pura_box">
			<section class="service" id="lab-container">
				<h1 class="h-primary center main1">TOP RESEARCH</h1>
				<div class="box-container" id="lab">
					<div class="box">
						<img src="" alt="" />
						<h2 class="h-secondary center">IEEE Transactions on Computers</h2>
						<p class="center">This journal covers a wide range of topics in computer science and engineering, including algorithms, computer architecture, networking, and software engineering.</p>
						<button class="nav-link1 btn">Know More</button>
					</div>
					<div class="box">
						<img src="" alt="" />
						<h2 class="h-secondary center">ACM Transactions on Computer-Human Interaction</h2>
						<p class="center"> This publication focuses on the interaction between humans and computers, covering topics such as user interfaces, social computing, and cognitive modeling.</p>
						<button class="nav-link1 btn ">Know More</button>
					</div>
					<div class="box">
						<img src="" alt="" />
						<h2 class="h-secondary center">Journal of Computer Science and Technology</h2>
						<p class="center">This journal covers all areas of computer science and technology, including artificial intelligence, computer networks, software engineering, and high-performance computing</p>
						<button class="nav-link1 btn ">Know More</button>

					</div>
				</div>
			</section>

			<section id="event-container">
				<h1 class="h-primary center "> OUR EVENT</h1>
				<div id="container">
					<div class="box1">
						<img src="" alt="" />
						<h2 class="h-secondary center" >Robotics and Automation</h2>
						<p>The Robotics and Automation research program at Indian Institute of Information Technology Allahabad (IIITA) focuses on developing advanced algorithms...</p>
					</div>
					<div class="box1">
						<img src="" alt="" />
						<h2 class="h-secondary center" >Cybersecurity and Privacy</h2>
						<p>The Cybersecurity and Privacy research program at Indian Institute of Information Technology Allahabad (IIITA) focuses on developing techniques...</p>
					</div>
					<div class="box1">
						<img src="" alt="" />
						<h2 class="h-secondary center" >Wireless Communication</h2>
						<p>The Wireless Communication research program at  (IIITA) focuses on developing wireless communication technologies and systems to enable efficient...</p>
					</div>

				</div>


			</section>
			</div>
            <Footer />
			</div>
		</>
	)
}

export default Home