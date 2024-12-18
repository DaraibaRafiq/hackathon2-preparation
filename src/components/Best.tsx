


import React from 'react';
import Image from 'next/image';

function Best() {
  return (
    <div className="px-8 md:px-4">
      <div className='h-[40px] w-[128px] gap-[16px] flex ml-0 md:ml-4 mt-10'>
        <div className='w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]'></div>
        <h2 className='font-poppins h-[20px] w-[90px] opacity[100%] pt-[10px] font-semibold text-[#DB4444]'>Products</h2>
      </div>
      <div className='flex justify-between mt-4'>
        <div>
          <h2 className='font-inter font-semibold text-4xl'>Best Selling Products</h2>
        </div>
        <div className='flex'>
          <button className='bg-[#DB4444] text-white px-6 py-2 rounded-md'>View All</button>
        </div>
      </div>
      <div className='mt-12 flex flex-wrap justify-center items-center gap-8'>
        <div className='w-[270px] h-[350px]'>
          <Image src="/cart1.png" alt="cart1" width={300} height={300} className="w-full h-auto" />
        </div>
        <div className='w-[270px] h-[350px]'>
          <Image src="/cart2.png" alt="cart2" width={300} height={300} className="w-full h-auto" />
        </div>
        <div className='w-[270px] h-[350px]'>
          <Image src="/cart3.png" alt="cart3" width={300} height={300} className="w-full h-auto" />
        </div>
        <div className='w-[270px] h-[350px]'>
          <Image src="/cart4.png" alt="cart4" width={300} height={300} className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default Best;
