import React from 'react'
import './Portfolio.css'
import  img1 from '../../img/copy3.png'
import  img2 from '../../img/copy4.png'
import  img3 from '../../img/copy7.png'
import  img4 from '../../img/copy5.jpg'
import  img5 from '../../img/copy6.png'
import  img6 from '../../img/Colorful Modern Social Media Marketing Instagram Post (1).png'
import img7 from '../../img/Screenshot 2024-08-28 180702.png'
import img8 from '../../img/ecommerce.png'
import img9 from '../../img/Screenshot 2024-08-31 152133.png'
import img10 from '../../img/Screenshot 2024-08-31 152057.png'
import img11 from '../../img/Screenshot 2024-08-28 114621.png'
import img12 from '../../img/Screenshot 2024-08-28 114828.png'
import img13 from '../../img/Screenshot 2024-08-31 153144.png'
import img14 from '../../img/Screenshot 2024-08-31 153412.png'
import img15 from '../../img/Screenshot 2024-08-31 153727.png'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  return (
   <>
    <div className="container-fluid PortfolioContainer">
<h1 className="text-center Portfolio-heading">MY Portfolio</h1><h1 className="text-center"></h1>
    </div>
   
   <div className="container">
    <h1 className="text-center Portfolio-heading">Development</h1>
    <div className="row">
        <div className="col-4">
        <img src={img7} alt="" className='img-fluid portfolio-images--' />
        
        </div>
        <div className="col-4">
        <img src={img11} alt="" className='img-fluid portfolio-images--' />


        </div>
        <div className="col-4">
        <img src={img12} alt="" className='img-fluid portfolio-images--' />


        </div>
        <div className="col-4">
        <img src={img10} alt="" className='img-fluid portfolio-images--' />


        </div>
        <div className="col-4">
        <img src={img9} alt="" className='img-fluid portfolio-images--' />


        </div>
        <div className="col-4">
        <img src={img8} alt="" className='img-fluid portfolio-images--' />


        </div>
        <div className="col-4">
        <img src={img13} alt="" className='img-fluid portfolio-images--' />


        </div>
        <div className="col-4">
        <img src={img14} alt="" className='img-fluid portfolio-images--' />


        </div>
        <div className="col-4">
        <img src={img15} alt="" className='img-fluid portfolio-images--' />


        </div>
    </div>
   </div>



   <div className="container">
    <h1 className="text-center Portfolio-heading">Designing</h1>
    <div className="row">
        <div className="col-4">
<img src={img1} alt="" className='img-fluid portfolio-images' />



        </div>
        <div className="col-4">
        <img src={img2} alt="" className='img-fluid portfolio-images' />

        </div>
        <div className="col-4">

<img src={img3} alt="" className='img-fluid portfolio-images' />
        </div>
        <div className="col-4">
<img src={img4} alt="" className='img-fluid portfolio-images-' />

        </div>
        <div className="col-4">
<img src={img5} alt="" className='img-fluid portfolio-images-' />

        </div>
        <div className="col-4">
<img src={img6} alt="" className='img-fluid portfolio-images-' />

        </div>
        <div className="col-4"></div>
        <div className="col-4"></div>
        <div className="col-4"></div>
    </div>
   </div>


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

export default Portfolio
