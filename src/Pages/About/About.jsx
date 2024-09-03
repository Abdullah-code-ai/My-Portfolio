import React ,{useEffect} from 'react'
import './About.css'
import img1 from '../../img/b9e407e8-757c-416f-9cf7-537c11337f90.png'
import Resume from '../../Pages/About/resume.pdf'
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500
    })
  }, [])
  return (
    <>
    <div className="container-fluid aboutContainer">
<h1 className="text-center about-heading" >Let me introduce myself</h1><h1 className="text-center"></h1>
    </div>

    <section className="aboutSection" id="sectionAbout">
        <div className="aboutContents">
          {/*  =======   About Image Starts   =======  */}
          <div className="aboutImage">
            <img src={img1} data-aos="zoom-in" />
          </div>
          {/*  =======   About Image Ends   =======  */}
          {/*  =======   About Info Starts   =======  */}
          <div className="aboutInfo" data-aos="zoom-in">
            <h1>About Me</h1>
            <h2>Professional Web Designer &amp; Developer have 2 years of experience</h2>
            <p>I am a front-end developer and social media manager with a passion for creating engaging digital experiences. With expertise in HTML, CSS, JavaScript, and frameworks like React, I craft responsive, user-friendly web applications that are both functional and visually appealing. My background in social media management complements my technical skills, allowing me to design and execute effective digital marketing strategies that drive engagement and enhance brand presence.

I thrive on the challenge of blending creativity with technology, ensuring that every project not only meets user needs but also aligns with broader business goals. My work is driven by a commitment to continuous learning and staying ahead of industry trends, enabling me to deliver innovative solutions that make a real impact.

Explore my portfolio to see how I can bring your ideas to life through exceptional web development and strategic social media management.</p>
           
            <div className="aboutPersonalInfo" data-aos="zoom-in-left">
              <div><span>Name:</span><span>Abdullah Tabassam</span></div>
              <div><span>Age:</span><span>17 Years</span></div>
              <div><span>Email:</span><span>abdullahtabassam@gmail.com</span></div>
              <div><span>Address:</span><span>Ausia Murree</span></div>
            </div>
            <div className="button-">
            {/* <a >
          <button className="button s-button">Download CV</button>
        </a> */}
<a href={Resume} download>
              <button>Download CV</button>
              </a>
              <div className="containe mt-5"  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <h1 className='title'>My Skills</h1>
          </div>
            </div>
          </div>
         
          {/*  =======   About Info Ends   =======  */}
          {/*  =======   About Skills Starts   =======  */}

        
          <div className="aboutSkills"  data-aos="fade-right"
     data-aos-offset="200"
     data-aos-easing="ease-in-sine">
            <div className="skill">
              <div className="subject">HTML</div>
              <div className="progress_bar">
                <div className="progress_line" value="98%" style={{maxWidth: '93%'}} />
              </div>
            </div>
            <div className="skill">
              <div className="subject">css</div>
              <div className="progress_bar">
                <div className="progress_line" value="90%" style={{maxWidth: '90%'}} />
              </div>
            </div>
            <div className="skill">
              <div className="subject">Java Script</div>
              <div className="progress_bar">
                <div className="progress_line" value="85%" style={{maxWidth: '85%'}} />
              </div>
            </div>
            <div className="skill">
              <div className="subject">React</div>
              <div className="progress_bar">
                <div className="progress_line" value="86%" style={{maxWidth: '86%'}} />
              </div>
            </div>
            <div className="skill">
              <div className="subject">Bootstrap</div>
              <div className="progress_bar">
                <div className="progress_line" value="80%" style={{maxWidth: '80%'}} />
              </div>
            </div>
            <div className="skill">
            <div className="subject">Tailwind</div>
              <div className="progress_bar">
                <div className="progress_line" value="80%" style={{maxWidth: '80%'}} />
              </div>
            </div>
            <div className="skill">
            <div className="subject">Github</div>
              <div className="progress_bar">
                <div className="progress_line" value="85%" style={{maxWidth: '85%'}} />
              </div>
            </div>
            <div className="skill">
            <div className="subject">Photoshop</div>
              <div className="progress_bar">
                <div className="progress_line" value="80%" style={{maxWidth: '80%'}} />
              </div>
            </div><div className="skill">
            <div className="subject">Canva</div>
              <div className="progress_bar">
                <div className="progress_line" value="90%" style={{maxWidth: '90%'}} />
              </div>
            </div>
            <div className="skill">
            <div className="subject">Social Media Manager</div>
              <div className="progress_bar">
                <div className="progress_line" value="90%" style={{maxWidth: '90%'}} />
              </div>
            </div>
            
            
            <div className="skill">
            <div className="subject">Meta Ads Expert</div>
              <div className="progress_bar">
                <div className="progress_line" value="90%" style={{maxWidth: '90%'}} />
              </div>
            </div>
           
            
          </div>
          {/*  =======   About Skills Ends   =======  */}
        </div>
      </section>






      <div class="container main"  data-aos="fade-right">
	
	<main class="row">
		
	

		<section class="col">
			
			<header class="title">
				<h2>EDUCATION</h2>
			</header>

			<div class="contents">
				
				<div class="box">
					<h4>2020 - 2022</h4>
					<h3> School Degree</h3>
					<p> school was a foundational period where I developed essential skills in problem-solving, teamwork, and communication, laying the groundwork for my journey into front-end development and social media management.</p>
				</div>

				<div class="box">
					<h4>2022 - 2024</h4>
					<h3>College  Degree</h3>
					<p>College was a transformative time where I honed my technical skills in front-end development, deepened my understanding of digital marketing, and built a strong foundation for my professional career</p>
				</div>

				<div class="box">
					<h4>Started 2024</h4>
					<h3>BS Degree</h3>
					<p>Earning my BS degree provided me with a solid foundation in front-end development and digital marketing, equipping me with the technical expertise and strategic thinking essential for success in the tech industry</p>
				</div>

			</div>
		</section>


		<section class="col">
			
			<header class="title">
				<h2>EXPERIENCE</h2>
			</header>

			<div class="contents">
				
				<div class="box">
					<h4>2018 - 2022</h4>
					<h3>UI/UX Designer</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
				</div>

				<div class="box">
					<h4>2018 - 2022</h4>
					<h3>Full-Stack Developer</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
				</div>

				<div class="box">
					<h4>2018 - 2022</h4>
					<h3>Frontend Developer</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
				</div>

			</div>
		</section>

		
	</main>
</div>

<div className="container text-center mt-5  container-contact">
<h3 className='container-content'>Have a project in mind</h3>
<h1 className='container-content1'>Let me help you</h1>
<button class="button">Contact Us</button>

</div>



    </>
  )
}

export default About
