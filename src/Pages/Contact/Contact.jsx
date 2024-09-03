import React ,{useState , useEffect} from 'react'
import './Contact.css'
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs.send(
          'YOUR_SERVICE_ID',        // Replace with your EmailJS service ID
          'YOUR_TEMPLATE_ID',       // Replace with your EmailJS template ID
          formData,
          'YOUR_USER_ID'            // Replace with your EmailJS user ID
        ).then((response) => {
            alert(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`);
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
    
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      };

useEffect(function () {
  AOS.init(
    {
      duration: 1000
    }
  );
}, []);


  return (
   <>
   <div className="container-fluid contactContainer" >
<h1 className="text-center contact-heading">Contact Us</h1><h1 className="text-center"></h1>
    </div>
   <div className="container-fluid" data-aos="zoom-in">
<div className="row">
<div className="col-md-7 col-sm-12 mt-5">
<div className="contact-form-container" >
      <h2 className='text-center'>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>






</div>
<div className=" cl col-sm-12 col-md-5 ">

<div className="card- card-">
<i class="bi bi-telephone-outbound-fill icon-" ></i>
<div><p className=' card-p '>+923100551936</p></div>

</div>

<div className="card- card-">
<i class="bi bi-envelope icon-" ></i>

<div><p className=' card-p '>abdullahtabass <br /> am79@gmail.com</p></div>

</div>
<div className="card- card-">
<i class="bi bi-geo-alt icon-" ></i>

<div><p className=' card-p '>Ausia Murree</p></div>

</div>


</div>


</div></div>
   
   
   
   
   </>
  )
}

export default Contact
