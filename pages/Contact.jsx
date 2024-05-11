import React from 'react';
import Footer from '../components/footer';

export default function Contact() {
  return (
    <>
      <div  id="contact"
            className="p-10 my-20 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-900/60 via-teal-600 to-emerald-900/60 text-teal-500 min-h-screen flex items-center justify-center">
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="bg-white p-8 rounded-lg shadow-md w-full md:w-2/3 lg:w-1/2"
        >
          <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
          <form
            action="https://formspree.io/f/xknllavn"
            method="POST"
            className="space-y-4"
          >
            <div>
              <label className="block text-gray-700">Your Name</label>
              <input
                type="text"
                name="name"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-gray-700">Your Email</label>
              <input
                type="email"
                name="_replyto"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="john.doe@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                className="mt-1 p-2 w-full border rounded-md"
                rows="4"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-teal-500 text-white p-2 rounded-md hover:bg-teal-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      
    </>
  );
}
