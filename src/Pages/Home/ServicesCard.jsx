import React, { useEffect } from 'react'
import './ServicesCard.css'
import img from '../../img/Dark Blue and Green Modern Digital Marketing Services Agency Instagram Post.png'
import img1 from '../../img/Digital Marketing Services Instagram Post.png'
import img2 from '../../img/Green And Yellow Modern Web Developer Instagram Post.png'
import img3 from '../../img/Purple Modern Logo Design Service Linkedin Post.png'
import img4 from '../../img/Web Design & Development Agency Promotion Facebook Post.png'



const ServicesCard = () => {
    const cardData = [
        {
          imgSrc: `${img4}`,
          icon: 'icon1.png',
          title: 'web design',
          description: 'I do ui/ux design for the website that helps website to get a unique look.',
        },
        {
          imgSrc: `${img2}`,
          icon: 'icon2.png',
          title: 'web dev',
          description: 'I also develop the websites. I create high performance website with blazing fast speed.',
        },
        {
          imgSrc: `${img3}`,
          icon: 'icon3.png',
          title: 'logo design',
          description: 'Crafting unique, professional logos that embody brand identity and captivate audiences',
        },
        {
          imgSrc: `${img}`,
          icon: 'icon4.png',
          title: 'Meta Ads',
          description: 'Creating compelling Meta Ads to drive engagement and boost conversions.',
        },
        {
          imgSrc: `${img1}`,
          icon: 'icon5.png',
          title: 'Digital Marketing',
          description: 'Strategizing innovative digital marketing solutions to enhance brand visibility online.',
        },
        // {
        //   imgSrc: 'image6.jpg',
        //   icon: 'icon6.png',
        //   title: 'Resume Design',
        //   description: 'Designing eye-catching resumes that effectively showcase skills and experience.',
        // },
      ];

useEffect (() => {
  AOS.init(
    {
      duration: 2000
    }
  );
}, [])

    

  return (
   <>


   {/* <div className="container">
  
   <div className="cards-container">
   <div className="card text-center">
    <img src="" alt="" />
   
    <div className="catr-content">
        <h3 className="card-title">ioasjdlk</h3>
        <p className="card-description">uoijkfdls, zxcm</p>
    </div>
</div>

<div className="card text-center">
    <img src="" alt="" />
   
    <div className="catr-content">
        <h3 className="card-title">ioasjdlk</h3>
        <p className="card-description">uoijkfdls, zxcm</p>
    </div>
</div>

<div className="card text-center">
    <img src="" alt="" />
    <div className="catr-content">
        <h3 className="card-title">ioasjdlk</h3>
        <p className="card-description">uoijkfdls, zxcm</p>
    </div>
</div>

<div className="card text-center">
    <img src="" alt="" />
    <div className="catr-content">
        <h3 className="card-title">ioasjdlk</h3>
        <p className="card-description">uoijkfdls, zxcm</p>
    </div>
</div>

<div className="card text-center">
    <img src="" alt="" />
    <div className="catr-content">
        <h3 className="card-title">ioasjdlk</h3>
        <p className="card-description">uoijkfdls, zxcm</p>
    </div>
</div>

<div className="card text-center">
    <img src="" alt="" />
    <div className="catr-content">
        <h3 className="card-title">ioasjdlk</h3>
        <p className="card-description">uoijkfdls, zxcm</p>
    </div>
</div>



   </div>
   </div> */}
   <div className="container">
   <h1 className='text-center h1' data-aos="fade-down-right">Services</h1>
    <div className="cards-container">
      {cardData.map((card, index) => (
        <div className="card" key={index} data-aos="zoom-in-right">
          <img src={card.imgSrc} alt={card.title} className="card-image" />
          <div className="card-content">
            {/* <img src={card.icon} alt="icon" className="card-icon" /> */}
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>


   
   
   </>
  )
}

export default ServicesCard
