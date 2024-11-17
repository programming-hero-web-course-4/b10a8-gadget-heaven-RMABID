import React from "react";

const Footer = () => {
  return (
    <footer className="bg-base-300  p-10">
      <div className="text-center">
        <h1 className="text-3xl text-center font-bold">Gadget Heaven</h1>
        <p className="">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <div className="md:flex justify-around text-center mt-8 border-t-2 border-white p-6 items-center">
        <div>
          <h1 className="text-xl font-bold">Services</h1>
          <ul className="space-y-2 mt-4">
            <li>Product Support </li>
            <li>Order Tracking</li>
            <li>Shipping & Delivery</li>
            <li>Returns</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-bold">Company</h1>
          <ul className="space-y-2 mt-4">
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-bold">Legal</h1>
          <ul className="space-y-2 mt-4">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
