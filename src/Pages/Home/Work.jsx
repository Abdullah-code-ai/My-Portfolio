import React, { useEffect } from 'react'
import './Work.css'

import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import LinkedIn from '../../img/0d42af6a-15ec-4008-a046-9241385516fe.png'
import indeed from '../../img/b9e407e8-757c-416f-9cf7-537c11337f90.png'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import Facebook from "../../img/Facebook.png";

const Work = () => {
  useEffect (() => {
    AOS.init(
      {
        duration: 2000
      }
    );
  }, []);
  return (
    <>
    <div className="container-fluid mt-5">
        <div className="row">
            <div className="col-md-12 col-xl-5  ps-5"  >
            <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span  data-aos="fade-up">
            Works for All these
          </span>
          <span  data-aos="fade-up">Brands & Clients</span>
          <spane data-aos="fade-up">
          Experienced front-end developer collaborating with top brands and 
            <br />
           
            clients on LinkedIn, Fiverr, Upwork, and Facebook. Specializing
            <br />
           
            
            in creating responsive, user-friendly interfaces tailored to diverse business needs.
          </spane>
          <Link to="/contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
        </div>



            </div>
            <div className="col-6   col-sm-5 w-right-">
            <div className="w-right" >
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={LinkedIn} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={indeed} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    




            </div>
        </div>
    </div>
    {/* left side */}
   

        {/* right side */}
    
      
    
    </>
  )
}

export default Work
