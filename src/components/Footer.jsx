import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-gray-200 py-12 relative">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Footer Column 1 */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h3 className="text-2xl font-bold">Virtual Journey</h3>
          {/* <Link to="https://www.instagram.com/3d_aditya/"target="_blank">Made with <span className="text-pink-500">❤</span> by Aditya</Link> */}

          <p className="text-gray-500 text-sm">2024 © All Rights Reserved</p>
        </div>

        {/* Footer Column 2 */}
        <div className="flex flex-col items-center md:items-start gap-4">
        <Link to="/about">About</Link>
          <p>Our Mission</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>

        {/* Footer Column 3 */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <p>Services</p>
          <p>Products</p>
        </div>
      </div>      
    </footer>
  );
};

export default Footer;
