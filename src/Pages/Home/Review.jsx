import React, { useState, useEffect, useRef } from 'react'
import './Review.css'
import img1 from '../../img/Purple Modern Logo Design Service Linkedin Post.png'

const reviews = [
    {
        name: "John Doe",
        feedback: "Abdullah is a person of commitment. He is really good at what he is doing. I really like his work. Especially the unique point of view of designing.",
        position: "CEO, Example Corp",
        image: `${img1}`, // Placeholder image URL
    },
    {
        name: "Jane Smith",
        feedback: "Really amazing communication skills. Always understand what I am trying to achieve. Also, his work is really amazing. Do really high-quality work.",
        position: "Marketing Director, Sample Inc.",
        image: `${img1}`, // Placeholder image URL
    },
    {
        name: "Mike Johnson",
        feedback: "Really hard-working person. Deliver the work as promised. Planning to work more with this person.",
        position: "Product Manager, Demo LLC",
        image: `${img1}`, // Placeholder image URL
    },
    {
        name: "Emily White",
        feedback: "Professional and efficient in every aspect.",
        position: "CTO, Tech Solutions",
        image: `${img1}`, // Placeholder image URL
    },
];

const Review = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        startAutoSlide();
        return () => clearInterval(intervalRef.current);
    }, []);

    const startAutoSlide = () => {
        intervalRef.current = setInterval(() => {
            slideNext();
        }, 3000);
    };

    const slideNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const slidePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
        );
    };

    const pauseAutoSliding = () => {
        clearInterval(intervalRef.current);
    };

    const resumeAutoSliding = () => {
        startAutoSlide();
    };

    useEffect (() => {
        AOS.init(
          {
            duration: 2000
          }
        );
      }, []);

   
  return (
    <>
<div className="container text-center">
    <h1 className='h1-'>Testimonials</h1>
    <h3 className='h3-'>see what our clients say about us</h3>
</div>




     <div   data-aos="zoom-in"
            className="carousel-container"
            onMouseOver={pauseAutoSliding}
            onMouseOut={resumeAutoSliding}
        >
            <div className="carousel">
                {reviews.map((review, index) => (
                    <div
                        className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                        key={index}
                    >
                        <img src={review.image} alt={review.name} className="client-image" />
                        <p className="feedback">"{review.feedback}"</p>
                        <h4 className="name">{review.name}</h4>
                        <p className="position">{review.position}</p>
                    </div>
                ))}
            </div>
            <div className="carousel-controls">
                <button className="prev" onClick={slidePrev}>&#10094;</button>
                <button className="next" onClick={slideNext}>&#10095;</button>
            </div>
            <div className="indicators">
                {reviews.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
        
    
    
    </>
  )
}

export default Review
