import React from 'react';
import img1 from '../../assets/girl yoga.jpg';
import img2 from '../../assets/girl yoga2.jpg';
import img3 from '../../assets/girl yoga3.jpg';
const BodyBalance = () => {
  return (
   <section>
      <div className='lg:flex md:flex container mx-auto'>
        <div className='sm:w-1/3'>
          <img className='h-80 w-full' src={img1} alt="" />
        </div>
        <div className='flex flex-col justify-center items-center p-4 sm:w-1/3 bg-sky-100 h-80'>
            <h1 className='text-4xl font-bold'>Body Balance</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <button>View Details</button>
        </div>
        <div className='sm:w-1/3'>
              <img className='h-80 w-full' src={img2} alt="" />
        </div>
      </div>
   </section>
  );
};

export default BodyBalance;