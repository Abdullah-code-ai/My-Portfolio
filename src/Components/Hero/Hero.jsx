import React ,{useEffect} from 'react'
import './Hero.css'
import boy1 from '../../img/boy1.png'
import img1 from '../../img/thumbup.png'
import img2 from '../../img/crown.png'
import img3 from '../../img/humble.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  useEffect(() => {
    AOS.init(
      {
        duration: 2000
      }
    );
  }, [])



    return (
   <>
   <section className="hero-section d-flex align-items-center justify-content-center">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-6 col-12 col-sm-12  ps-5 text-center text-lg-start hero-content" data-aos="fade-right">
            <h1 className="hero-title" data-aos="fade-up">Hy! I Am</h1>
            <h2 className="hero-name">Abdullah Tabassam</h2>
            <p className="hero-description">
              Frontend Developer and Social Media Manager with a high level of experience in web designing and development, producing quality work.
            </p>
            <Link to="/contact">
            <button className="btn btn-primary hire-me-btn">Hire me</button>
            </Link>

          
            <div className="social-icons mt-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-github"></i></a>
              {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-linkedin"></i></a> */}
              <a href="https://www.instagram.com/tabassam498/" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-instagram"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="https://www.facebook.com/profile.php?id=61564048918752" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-facebook"></i></a>

            </div>
          </div>
          <div className="col-md-6  text-center hero-image-wrapper">
            <img src={boy1} alt="Developer" className="hero-image img-fluid" />
            <div className="floating-div floating-web-developer">
              <div className="floating-content">
                <img src={img1} alt="" className="img-fluid-" />
                
                Web Developer</div>
            </div>
            <div className="floating-div floating-social-media-manager">
              <div className="floating-content">
              <img src={img2} alt="" className="img-fluid-" />
                Social Media Manager</div>
            </div>
            <div className="floating-emoji">
              <img src={img3} alt="Emoji" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
   
   </>
  )
}

export default Hero
