import React from 'react';
import first from '../assets/first.png';
import icon1 from '../assets/Image.png';
import icon2 from '../assets/Image (1).png';
import icon3 from '../assets/Image (2).png'

const Start = ({ onNavigate }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
        <div className="relative w-[500px] h-[500px] bg-white  shadow-lg p-2  flex flex-col justify-center items-center">
      <div
        className="relative   shadow-lg p-6 flex flex-col justify-between"
        style={{
          backgroundImage: `url(${first})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '480px', 
          height: '430px',
          
        }}
      >
        {/* Overlay to darken the image */}
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>

        {/* Header Section */}
        <div className="relative z-10 flex flex-col justify-between mt-[-10px]">
          <div className="flex items-center">
            <span className="text-white text-lg mr-2">4.0</span>
            <div className="flex">
              <span className="text-red-600 text-2xl">★</span>
              <span className="text-red-600 text-2xl">★</span>
              <span className="text-red-600 text-2xl">★</span>
              <span className="text-red-600 text-2xl">★</span>
              <span className="text-gray-500 text-2xl">★</span>
            </div>
          </div>
          <div className="bg-[#502813] w-[350px] h-[25px] border mt-3 border-[#7B3F26] text-white py-1 px-3 rounded-lg text-[10px] font-timmy">
            Superior Room, Accessible (Westminster Superior Room)
          </div>
          {/* Title Section */}
        <h1 className="relative z-10 mt-2 text-white text-lg font-semibold mb-6">
        Park Plaza Westminster Bridge <br />
London Park Plaza Westminster <br />
Bridge London
        </h1>

        
        {/* Information Section */}
        
        <div className="relative z-10 flex mt-[149px]  justify-around text-white mb-0">
          <div className="text-center">
            <img src={icon1} alt="" className='w-[40px] h-[40px] mb-1 ' />
            <div className="text-[11px]">Location</div>
            <div className="text-md text-[#B56E64] mt-[-3px]">London</div>
          </div>
          <div className="text-center">
          <img src={icon2} alt="" className='w-[40px] h-[40px] mb-1' />
            <div className="text-[11px]">Start Date</div>
            <div className="text-md text-[#B56E64] mt-[-3px]">date</div>
          </div>
          <div className="text-center">
          <img src={icon3} alt="" className='w-[40px] h-[40px] mb-1' />
            <div className="text-[11px]">Check out</div>
            <div className="text-md text-[#B56E64] mt-[-3px]">date</div>
          </div>
        </div>
        </div>

        


        
      </div>

      {/* Button Section */}
        
      <div className="relative z-10 flex justify-between mt-3 mb-1 w-full px-6">
  <button className="border-2 border-[#F58555] text-[#FA4428] px-5 rounded-md text-lg font-semibold   mr-2">
    Hotel Details
  </button>
  <button className="bg-[#CA3F2A] duration-300 text-white px-5 rounded-md text-lg font-semibold   ml-2" 
  onClick={onNavigate}>
    Buy Booking
  </button>
</div>

    </div>
    </div>
  );
};

export default Start;
