import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
   <>
  <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 			<p className='paragraph'>I am a freelance website designer and developer based in Pakistan . I create professional websites. I love art and always try to show unique views to the audience through my design</p>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Quic Links</h4>
  	 			<ul>
  	 				<li><Link to="/About">about us</Link></li>
  	 				<li><Link to="/Services">our services</Link></li>
  	 				<li><Link to="/Portfolio">Portfolio</Link></li>
  	 				<li><Link to="/Contact">Contact</Link></li>
  	 			</ul>
  	 		</div>
  	 		
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
				   <a href="https://www.facebook.com/profile.php?id=61564048918752" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-facebook"></i></a>
					   <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i class="fab fa-github"></i></a>
					   <a href="https://www.instagram.com/tabassam498/" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-instagram"></i></a>
  	 				{/* <a href="#"><i class="fab fa-linkedin-in"></i></a> */}
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>

   
   
   
   
   </>
  )
}

export default Footer
