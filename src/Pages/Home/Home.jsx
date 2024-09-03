import React from 'react'
import Hero from '../../Components/Hero/Hero'
import About from './About'
import ServicesCard from './ServicesCard'
import Review from './Review'
import Projest from './Projest'
import './Home.css'
import Work from './Work'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
   <>
   
   <Hero />
   <About />
   <ServicesCard />
   <Projest />
   <Work />
<Review />


<div className="container  text-center mt-5  container-contact">
<h3 className='container-content'>Have a project in mind</h3>
<h1 className='container-content1'>Let me help you</h1>

<Link to="/contact">
<button class="button">Contact Us</button>
</Link>
{/* <button class="button">Contact Us</button> */}

</div>

   
   </>
  )
}

export default Home
