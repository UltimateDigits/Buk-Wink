import React from 'react'
import first from '../assets/updated/bg.png';
import buk from '../assets/updated/buk.png';
import oops from '../assets/updated/oops.png'

const Resold = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
    <div className="relative md:w-[500px] md:h-[500px] sm:h-[350px] sm:w-[350px] bg-[#161616] shadow-lg p-2 flex flex-col items-center">
      <div
        className="relative shadow-lg md:w-[485px] md:h-[230px] sm:h-[160px] sm:w-[335px] p-6 flex flex-col justify-between"
        style={{
          backgroundImage: `url(${first})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          
        }}
      >
        <div className='md:ml-[330px] sm:ml-[200px]'>
          <img src={buk} alt="" className='md:w-[70px] w-[50px] md:ml-12 sm:ml-[35px]' />
          
        </div>

        {/* content */}
        <div className=' md:mt-48 sm:mt-32 items-center justify-center flex flex-col text-center'>
         <img src={oops} alt="" className='md:w-16 md:h-16 sm:h-12 sm:w-12 ' />
       
         <h2 className='text-white md:text-lg sm:text-sm md:mt-5 sm:mt-3'>Oops! Booking resold. <br />
         Check our marketplace for more deals!</h2>

         

         <button className="bg-[#CA3F2A] text-white md:px-[40px] md:mt-8 sm:px-[30px] sm:mt-4 py-1 rounded-md md:text-lg sm:text-xs border-[#FFE3E3] border border-opacity-50   "
          >
          More Deals
          </button>

         
        </div>
       
      </div>
    </div>
  </div>
  )
}

export default Resold