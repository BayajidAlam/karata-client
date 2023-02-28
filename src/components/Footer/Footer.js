import React from "react";
import logo from "../../assets/croped-logo.png";
import { CiLocationOn } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { BsClock } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-[#444444] text-white">
      <div className="container mx-auto py-20 px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-4 p-6">
          <div className="flex items-center">
            <img src={logo} alt="" />
            <p className="text-5xl font-bold">Karata</p>
          </div>
          <div className="flex items-center">
            <CiLocationOn className="mr-2 bg-main text-4xl rounded-full" />
            <p>Romania City Town Hall, UK</p>
          </div>
          <div className="flex items-center">
            <IoIosCall className="mr-2  bg-main text-4xl rounded-full" />
            <p>012-1239803-42</p>
          </div>
          <div className="flex items-center">
            <BsClock className="mr-2  bg-main text-4xl rounded-full" />
            <p>09 AM - 09 PM</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start">
          <div className="space-y-4">
            <h1 className="text-2xl font-extrabold">About Us</h1>
            <p>Sed ut perspiciatis unde omni natus error sit voluptatem accusantium doloremque laudantium.</p>
          </div>

          <div className="space-y-4">
              <h1 className="text-2xl font-extrabold">Quick Links</h1>
              <div className="flex flex-col space-y-2 text-xl">
                <Link className="hover:text-main">About Us</Link>
                <Link className="hover:text-main">Services</Link>
                <Link className="hover:text-main">Case Studies</Link>
                <Link className="hover:text-main">Pricing</Link>
                <Link className="hover:text-main">Contact</Link>
              </div>
          </div>

          <div  className="space-y-4">
              <h1 className="text-2xl font-extrabold">Useful Links</h1>
              <div className="flex flex-col space-y-2 text-xl">
                <Link className="hover:text-main">Privacy Policy</Link>
                <Link className="hover:text-main">Terms and Conditions</Link>
                <Link className="hover:text-main">Disclaimer</Link>
                <Link className="hover:text-main">Support</Link>
                <Link className="hover:text-main">FAQ</Link>
              </div>
          </div>
          <div  className="space-y-4">
            <h1 className="text-2xl font-extrabold">Subscribe Our Newsletter</h1>
            <div className="flex ">
              <input className="py-2 md:w-60 w-96 px-6" type="text" placeholder="Email"/>
              <button className="text-white bg-main py-6 px-4  ml-1">
                <AiOutlineDoubleRight className="text-xl"/>
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <FaFacebookSquare className="text-2xl text-main"/>
              <BsTwitter className="text-2xl text-main"/>
              <FaLinkedinIn className="text-2xl text-main"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
