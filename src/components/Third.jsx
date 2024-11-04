import React from 'react'
import first from '../assets/second.png';

const Third = ({ onNavigate }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
    <div className="relative w-[500px] h-[500px] bg-white shadow-lg p-2 flex flex-col items-center">
      <div
        className="relative shadow-lg mt-5 p-6 flex flex-col justify-between"
        style={{
          backgroundImage: `url(${first})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '440px',
          height: '260px',
        }}
      >
        <h2 className='items-center justify-center mt-[-15px] text-lg flex text-white font-timmy'>2/3</h2>

        {/* Input Section */}
        <div className="flex flex-col items-center mb-[40px] "> 
          <input
            type="text"
            placeholder="First Name"
            className="border border-gray-300 rounded-md p-2  py-2 mb-10 w-[80%] max-w-[400px] focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-gray-300 rounded-md p-2 py-2 mb-10 w-[80%] max-w-[400px] focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button className="bg-[#CA3F2A] text-white px-16 py-1 rounded-md text-lg font-semibold "
          onClick={onNavigate}>
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Third