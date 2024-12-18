

import React from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from 'next/image';

const Products = () => {
  return (
    <div>
      <div className='h-[40px] w-[128px] gap-[16px] flex ml-[130px] mt-10'>
        <div className='w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]'></div>
        <h2 className='font-poppins h-[20px] w-[90px] opacity[100%] font-semibold text-[#DB4444]'>Our Products</h2>
      </div>
      <div className='flex justify-between ml-[130px]'>
        <div>
          <h2 className='w-[379px] h-[48px] font-inter font-semibold text-4xl '>Explore Our Products</h2>
        </div>
        <div className='flex mr-[100px] '>
          <button className='bg-slate-100 p-4 rounded-full'><FaArrowLeft /></button>
          <button className='bg-slate-100 p-4 rounded-full'><FaArrowRight /></button>
        </div>
      </div>
      <div className='ml-32 mt-12 flex flex-col md:flex-row justify-center items-center gap-16 md:gap-8 mr-28'>
        <div className='w-[270px] h-[322px]'>
          <Image src="/p1.png" alt="p1" width={300} height={300} />
        </div>
        <div className='w-[270px] h-[322px]'>
          <Image src="/p2.png" alt="p2" width={300} height={300} />
        </div>
        <div className='w-[270px] h-[322px]'>
          <Image src="/p3.png" alt="p3" width={300} height={300} />
        </div>
        <div className='w-[270px] h-[322px]'>
          <Image src="/p1.png" alt="p1" width={300} height={300} />
        </div>
      </div>
      <div className='ml-32 mt-4 flex flex-col md:flex-row justify-center items-center gap-16 md:gap-8 mr-28'>
        <div className='w-[270px] h-[350px]'>
          <Image src="/p5.png" alt="p5" width={300} height={300} />
        </div>
        <div className='w-[270px] h-[350px]'>
          <Image src="/p6.png" alt="p6" width={300} height={300} />
        </div>
        <div className='w-[270px] h-[350px]'>
          <Image src="/p7.png" alt="p7" width={300} height={300} />
        </div>
        <div className='w-[270px] h-[350px]'>
          <Image src="/p8.png" alt="p8" width={300} height={300} />
        </div>
      </div>
      <div>
        <button className='w-[234px] h-[56px] bg-[#DB4444] text-[#FAFAFA] font-poppins ml-[590px]'>View All Products</button>
      </div>
    </div>
  )
}

export default Products;
