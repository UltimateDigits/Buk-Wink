import React from 'react'
import first from '../assets/updated/bg.png';
import buk from '../assets/updated/buk.png';
import oops from '../assets/updated/oops.png'

const Backup = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
    <div className="relative w-[500px] h-[500px] bg-[#161616] shadow-lg p-2 flex flex-col items-center">
      <div
        className="relative shadow-lg  p-6 flex flex-col justify-between"
        style={{
          backgroundImage: `url(${first})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '485px',
          height: '230px',
        }}
      >
        <div className='ml-[330px]'>
          <img src={buk} alt="" className='w-[70px] ml-12' />
          
        </div>

        {/* content */}
        <div className=' mt-48 items-center justify-center flex flex-col text-center'>
        
       
         <h2 className='text-center text-white text-md font-light mt-3'>You’re purchasing Superior room at the  Park Plaza <br /> Westminster Bridge London  Park Plaza Westminster <br /> Bridge London  from 24-06-2024 to 24-06-2024 <br /> for USDC 447.90 for 2 guests.</h2>

         
           <div>
            <p className='bg-[#331D19] border border-[#7B3F26] text-white text-xs py-2 rounded-lg px-4 mt-5'>0xC6253c09fD4041d38CfC29d15266634D384843AC</p>
           </div>
         <button className="bg-[#CA3F2A] text-white px-[80px] mt-8 py-1 rounded-md text-lg border-[#FFE3E3] border border-opacity-50   "
          >
          More Deals
          </button>

         
        </div>
       
      </div>
    </div>
  </div>
  )
}

export default Backup