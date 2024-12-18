
 


  import React from "react";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export const Category = () => {
    return (
      <div className="px-8 md:px-4">
        <div className='h-[40px] w-[128px] gap-[16px] flex ml-0 md:ml-4 mt-10'>
          <div className='w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]'></div>
          <h2 className='font-poppins h-[20px] w-[90px] opacity[100%] pt-[10px] font-semibold text-[#DB4444]'>Categories</h2>
        </div>
        <div className='flex justify-between mt-4'>
          <div>
            <h2 className='font-inter font-semibold text-4xl'>Browse By Category</h2>
          </div>
          <div className='flex'>
            <button className='bg-slate-100 p-4 rounded-full mr-2'><FaArrowLeft /></button>
            <button className='bg-slate-100 p-4 rounded-full'><FaArrowRight /></button>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap justify-center items-center gap-7">
          <div className="w-[170px] h-[145px]">
            <Image src="/phone.png" alt="phone" width={200} height={300} className="w-full h-auto"/>
          </div>
          <div className="w-[170px] h-[145px]">
            <Image src="/computer.png" alt="computer" width={200} height={200} className="w-full h-auto"/>
          </div>
          <div className="w-[170px] h-[145px]">
            <Image src="/watch.png" alt="watch" width={200} height={200} className="w-full h-auto"/>
          </div>
          <div className="w-[170px] h-[145px]">
            <Image src="/camera.png" alt="camera" width={200} height={200} className="w-full h-auto"/>
          </div>
          <div className="w-[170px] h-[145px]">
            <Image src="/headphone.png" alt="headphone" width={200} height={200} className="w-full h-auto"/>
          </div>
          <div className="w-[170px] h-[145px]">
            <Image src="/gaming.png" alt="gaming" width={200} height={200} className="w-full h-auto"/>
          </div>
        </div>
        <div className="w-full mt-8">
          <hr className="border-t border-gray-300" />
        </div>
      </div>
    );
};
