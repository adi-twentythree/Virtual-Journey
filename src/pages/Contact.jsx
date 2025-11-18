import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formDataObject = new FormData(event.target);

    formDataObject.append("access_key", "4864f90d-9ec8-4d22-883e-644ee6413ecf");

    const object = Object.fromEntries(formDataObject);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setStatusMessage("Your message has been sent!");
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } else {
      setStatusMessage("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="py-40 ">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-wide leading-tight text-center mb-8">
          Contact Us
        </h1>
        <p className="text-center text-lg mb-12">
          Have a question or want to learn more? Feel free to reach out.
        </p>
        <form
          onSubmit={onSubmit}
          className="bg-white shadow-lg rounded-lg px-8 py-10 max-w-2xl mx-auto"
        >
          {/* Name Field */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full text-gray-700 px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full text-gray-700 px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full text-gray-700 h-40 px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Status Message */}
        {statusMessage && (
          <p className="text-center text-lg font-semibold mt-6 text-green-600">
            {statusMessage}
          </p>
        )}

        {/* Contact Info */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
          <p>
            Email: <a href="mailto:swarnadeepnath48@gmail.com" className="text-orange-500 hover:underline">Swarnadeepnath48@gmail.com
            </a>
          </p>
          <p>Phone: +91 99026 21498
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
