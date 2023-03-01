import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { BiEnvelopeOpen } from 'react-icons/bi';
import { IoIosCall } from 'react-icons/io';
import { AiOutlineClockCircle } from 'react-icons/ai';
import Maps from '../../components/Maps/Maps';
import Contact from '../../components/Contact/Contact';
import Gallery from '../../components/Gallery/Gallery';
import GetHelp from '../../components/GetHelp/GetHelp';

const ContactUs = () => {
  return (
    <section>
      <GetHelp/>
      <div className='container mx-auto sm:flex justify-evenly items-center py-20'>
        <div className='text-center space-y-6'>
          <div className='bg-main w-20 h-20 flex items-center justify-center rounded-full mx-auto'>
          <MdLocationOn className='text-white text-2xl'/>
          </div>
          <h1 className='text-2xl font-bold'>Our Address</h1>
          <p>2750 Quadra Street Victoria Road,
          <br /> New York, Canada</p>
        </div>
        <div className='text-center space-y-6'>
          <div className='bg-main w-20 h-20 flex items-center justify-center rounded-full  mx-auto'>
          <BiEnvelopeOpen className='text-white text-2xl'/>
          </div>
          <h1 className='text-2xl font-bold'>Email</h1>
          <p>hello@tokomoo.com</p>
        </div>
        <div className='text-center space-y-6'>
          <div className='bg-main w-20 h-20 flex items-center justify-center rounded-full  mx-auto'>
          <IoIosCall className='text-white text-2xl'/>
          </div>
          <h1 className='text-2xl font-bold'>Contact</h1>
          <p>+1234 5678 910</p>
        </div>
        <div className='text-center space-y-6'>
         <div className='bg-main  w-20 h-20 flex items-center justify-center rounded-full  mx-auto'>
         <AiOutlineClockCircle className='text-white text-2xl'/>
         </div>
          <h1 className='text-2xl font-bold'>Operation Hours</h1>
          <p>Monday - Friday: 09:00 - 17:00</p>
        </div>
      </div>
      <div className='w-full'>
      <Maps/>
      <Contact/>
      <Gallery/>
      </div>
    </section>
  );
};

export default ContactUs;