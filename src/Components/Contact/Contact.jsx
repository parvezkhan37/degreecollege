import './Contact.css'

import React from 'react'
import msg_icon from '../../asset/msg-icon.png'
import mail_icon from '../../asset/mail-icon.png'
import phone_icon from '../../asset/phone-icon.png'
import location_icon from '../../asset/location-icon.png'
import white_arrow from '../../asset/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "401d359f-66af-4445-992d-48ed8f3b812f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    return (
        <div className='contact'>
            <div className="contact-col"><h3>Send us a message <img src={msg_icon} alt="msg-icon" /></h3><p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggetions are important to us as we strive to provide exceptional service to our university community.</p><ul><li><img src={mail_icon} alt="mail-icon" />info@kpmtech.com</li>
            <li><img src={phone_icon} alt="phone-icon" />+1 123-456-7890</li>
            <li><img src={location_icon} alt="location-icon" />77 breden berg, Chicago MA 02143, United State</li></ul></div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label htmlFor="">Your name</label>
                    <input type="text" name="name" id="name" placeholder='Enter your name' required />
                    <label htmlFor="">Phone number</label>
                    <input type="tel" name="phone" id="phone" placeholder='Enter your phone number' />
                    <label htmlFor="">Write your messages here</label>
                    <textarea name="message" id="message" rows={"6"} placeholder='Enter your message' required></textarea>
                    <button type="submit" className='btn dark-btn'>submit now <img src={white_arrow} alt="white-arrow" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact
