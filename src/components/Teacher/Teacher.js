import React from 'react';
import teacher1 from '../../assets/teacher1.jpg';
import teacher2 from '../../assets/teacher2.jpg';
import teacher3 from '../../assets/teacher3.jpg';
import teacher4 from '../../assets/teacher4.jpg';

const Teacher = () => {
  return (
    <section className='py-24'>
      <div className='space-y-6'>
            <p className='font-bold text-main text-center'>OUR TEACHERS</p>
            <h1 className='text-5xl font-bold text-center'>Meet our teachers</h1>
            <div className='container mx-auto sm:flex justify-evenly items-center'>
              <div className='sm:w-1/5 space-y-3'>
                  <img src={teacher1} alt="" />
                  <div className='flex flex-col space-y-3 justify-center items-center'>
                    <h1 className='text-2xl'>Jordi Boston</h1>
                    <p>Lab Head</p>
                  </div>
              </div>
              <div className='sm:w-1/5 space-y-3'>
                  <img src={teacher2} alt="" />
                  <div className='flex flex-col space-y-3 justify-center items-center' >
                    <h1 className='text-2xl'>Emily Clay</h1>
                    <p>Chemist Expert</p>
                  </div>
              </div>
              <div className='sm:w-1/5 space-y-3'>
                  <img src={teacher3} alt="" />
                  <div className='flex flex-col space-y-3 justify-center items-center'>
                    <h1 className='text-2xl'>Mark Manson</h1>
                    <p>Pathology Special</p>
                  </div>
              </div>
              <div className='sm:w-1/5 space-y-3'>
                  <img src={teacher4} alt="" />
                  <div className='flex flex-col space-y-3 justify-center items-center'>
                    <h1 className='text-2xl'>Stella Claire</h1>
                    <p>Research Expert</p>
                  </div>
              </div>
            </div>
      </div>
    </section>
  );
};

export default Teacher;