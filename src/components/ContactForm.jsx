import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/your-server-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Handle success, show a success message or redirect
        console.log('Form submitted successfully!');
      } else {
        // Handle errors
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div class="container" id="container-contact">
        <div class="row" id="row-contact">
            <div class="section-heading" id="section-heading-contact">
                <h1>Get In Touch</h1>
                <p>If you'd like to talk about a project you want help with, just drop me a message!</p>
            </div>
        </div>
        <div class="contact">
            <div class="contact-information">
                <div class="contact-information-heading">
                    <h2>Contact Information</h2>
                    <p>I'm open for work, feel free to contact me!</p>
                </div>
                <div class="contact-row">
                    <div class="contact-detail">
                        <img src="assets/images/mail-24.png" alt=""/>
                        <p>firdanmildani@gmail.com</p>
                    </div>
                    <div class="contact-detail">
                        <img src="assets/images/phone-24.png" alt=""/>
                        <p>+6285723222203</p>
                    </div>
                    <div class="contact-detail">
                        <img src="assets/images/location-24.png" alt=""/>
                        <p>Sukabumi, Indonesia</p>
                    </div>
                </div>
            </div>
            <div class="contact-send-message">
                <div class="contact-send-message-heading">
                    <h2>Send Me a Message</h2>
                </div>
                <form action="mailto:firdanmildani@gmail.com" method="GET" enctype="text/plain">
                    <div class="input-box">
                        <label for="name">Your Name</label>
                        <input type="text" placeholder="Enter your name" id="name" />
                    </div>
                    <div class="input-box">
                        <label for="email">Subject</label>
                        <input name="subject" placeholder="Enter your subject" id="subject" required="required" enctype="text/plain"/>
                    </div>
                    <div class="input-box message-box">
                        <label for="message">Message</label>
                        <textarea body='body text' name="body" id="message" cols="30" rows="10" placeholder="Write your message here" enctype="text/plain"></textarea>
                       
                    </div>
                    <div class="contact-button">
                        <button class="button-send" type="submit" value="Send Now">Send Now</button>
                        
                    </div>
                </form>
            </div>
        </div>
    </div>
    // <form onSubmit={handleSubmit}>
    //   <input
    //     type="text"
    //     name="name"
    //     placeholder="Name"
    //     value={formData.name}
    //     onChange={handleChange}
    //   />
    //   <input
    //     type="email"
    //     name="email"
    //     placeholder="Email"
    //     value={formData.email}
    //     onChange={handleChange}
    //   />
    //   <input
    //     type="text"
    //     name="subject"
    //     placeholder="Subject"
    //     value={formData.subject}
    //     onChange={handleChange}
    //   />
    //   <textarea
    //     name="message"
    //     placeholder="Message"
    //     value={formData.message}
    //     onChange={handleChange}
    //   ></textarea>
    //   <button type="submit">Submit</button>
    // </form>
  );
};

export default ContactForm;
