import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { AiTwotoneMail } from "react-icons/ai";
import emailjs from "emailjs-com";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all required fields!");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address!");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    emailjs
      .send(
        "service_updrsh5", //service id
        "template_bhfjbpe", //template id
        formData,
        "SPNkATodyQoLofRoV" //public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <section className="h-full w-full bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]  ">
      <h1 className="text-center font-bold text-white text-4xl md:text-3xl lg:text-6xl py-4 lg:py-10 ">
        Contact Me
      </h1>
      <div className="w-full h-full flex flex-col lg:flex-row gap-8 ">
        <div className="w-full h-full lg:w-1/2 flex flex-col   justify-center items-center p-2 ">
          <h3 className="text-white text-lg lg:text-4xl font-bold max-w-2xl ">
            {" "}
            Let’s work together on your next project.
          </h3>
          <ul className="list-disc text-white text-lg  mt-4 max-w-xl ">
            <li>
              I’m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </li>
            <li>
              Whether you have a question or just want to say hi, I’ll try my
              best to get back to you!
            </li>
            <li>
              Available for freelance work, collaborations, or any project
              inquiries.
            </li>
          </ul>
          <span className=" flex gap-6 mt-4 ">
            <a href="https://www.instagram.com">
              <FaLinkedin className="text-white text-2xl md:text-4xl font-semibold" />
            </a>
            <a href="https://www.instagram.com">
              <FaInstagramSquare className="text-white text-2xl md:text-4xl font-semibold" />
            </a>
            <a href="https://github.com">
              {" "}
              <FaGithub className="text-white text-2xl md:text-4xl font-semibold" />
            </a>
          </span>
          <span className=" flex gap-2 mt-3">
            <a href="https://mail.google.com">
              {" "}
              <AiTwotoneMail className="text-white text-xl md:text-2xl " />
            </a>
            <span className=" text-white text-sm md:text-lg">
              adyashabiswal9938@gmail.com
            </span>
          </span>
        </div>
        <div className="w-full h-full lg:w-1/2   gap-4">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 w-full h-full lg:w-[70%] lg:h-[70%]   rounded-lg p-4 bg-gradient-to-r from-blue-900 to-transparent "
          >
            <input
              type="text"
              name="name"
              className="w-full p-2 rounded-lg border-2 border-white text-white"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              className="w-full p-2 rounded-lg border-2 border-white text-white"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="subject"
              className="w-full p-2 rounded-lg border-2 border-white text-white"
              placeholder="Enter Your Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              type="text"
              name="message"
              className="w-full p-2 rounded-lg border-2 border-white text-white"
              placeholder="Enter Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
            ></textarea>
            <button className="font-semibold text-lg text-white w-full p-2 rounded-lg border-2">
              send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
