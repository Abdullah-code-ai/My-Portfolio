import React ,{useEffect} from 'react'
import './About.css'
import img1 from '../../img/boy1.png'
import {Link} from 'react-router-dom'
import Resume from '../../Pages/About/resume.pdf'
const About = () => {
  // useEffect (() => {
  //   AOS.init(
  //     {
  //       duration: 2000
  //     }
  //   );
  // }, [])
  // }
  return (
   <>
   
   <div className="container-fluid cl-about">
    <div className="row">
        <div className="col-md-6 col-12 ps-5 mt-5" >
<div className="data mt-5">
<h4 className='h2'>Let me introduce myself</h4>
<h1 className='h1'>About Me</h1>
<p className='p'>I am a freelance website designer and developer based in Pakistan. I create professional websites. I love art and always try to show unique views to the audience through my design.</p>
<div className='btn'>
<a href={Resume} download>
              <button class="button2">Download CV</button>
              </a>
       
{/* <button >Hover me</button> */}


<Link to="/About">
<button class="learn-more">
  <span class="circle" aria-hidden="true">
  <span class="icon arrow"></span>
  </span>
  <span class="button-text">Learn More</span>
</button>
</Link>
</div>
</div>
        </div>
        <div className="col-md-6 col-sm-12">
        <div className="aboutImage">
            <img src={img1} className='img--- ' />
          </div>


        </div>
    </div>
   </div>
   
   
   </>
  )
}

export default About
