import "./Contact.css";
import emailjs from "emailjs-com"; //import form emailjs service for api
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qu9pw6o", //service_id
        "template_exw2qoy", //template_id
        e.target, // retieve data from input form
        "90O86gxOmtT2G3ouK" //api key from emailjs.com
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    alert("Form Subbmitted");
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div id="Contact" className="snap-child">
      <h2>Contact Me</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          style={{ resize: "none", height: "2rem", fontSize: "20px" }}
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          style={{ resize: "none", height: "2rem", fontSize: "20px" }}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          style={{ resize: "none", height: "10rem", fontSize: "20px" }}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required></textarea>

        <button type="submit">Submit</button>
      </form>
      <div className="othercontact">
        <h4>ช่องทางอื่นๆ</h4>
        <a href="https://github.com/Timemi11">
          <img src="src\assets\logos\github.png" alt="GITHUB" />
        </a>
        <a href="https://www.facebook.com/timemi12">
          <img src="src\assets\logos\facebook.png" alt="FACEBOOK" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
