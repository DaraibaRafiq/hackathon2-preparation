

import React from 'react';
import { FaAngleRight, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap">
      <div className="flex md:text-left flex-shrink-0">
        <div className="w-[217px] h-auto gap-[16px] ml-[150px] p-6">
          <span className="flex items-center">
            <p className="font-poppins font-normal text-[16px] text-left">Womans Fashion</p>
            <FaAngleRight />
          </span>
          <span className="flex items-center">
            <p className="font-poppins font-normal text-[16px] text-left">Mens Fashion</p>
            <FaAngleRight />
          </span>
          <p className="font-poppins font-normal text-[16px] text-left">Electronics</p>
          <p className="font-poppins font-normal text-[16px] text-left">Home & Lifestyle</p>
          <p className="font-poppins font-normal text-[16px] text-left">Medicine</p>
          <p className="font-poppins font-normal text-[16px] text-left">Sports & Outdoor</p>
          <p className="font-poppins font-normal text-[16px] text-left">Babys & Toys</p>
          <p className="font-poppins font-normal text-[16px] text-left">Groceries & Pets</p>
          <p className="font-poppins font-normal text-[16px] text-left">Health & Beauty</p>
        </div>
        <div>
          <div className="w-[2px] h-full bg-[#000000] opacity-[30%] mr-[50px]" />
        </div>
      </div>
      <div className="p-6 lg:mr-[150px] flex-grow">
        <Image
          src="/hero.png"
          alt="hero"
          width={1000}
          height={1000}
          className="w-full max-w-[796px] h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;

export const Hero1 = () => {
  return (
    <div>
      <div className="h-[40px] w-[128px] gap-[16px] flex ml-[130px] mt-10">
        <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]" />
        <div>
          <h2 className="font-poppins text-[16px] font-semibold text-[#DB4444] pt-[10px]">Todays</h2>
        </div>
      </div>
      <div className="flex flex-wrap justify-between ml-[130px] items-center">
        <div>
          <h2 className="font-inter font-semibold text-4xl">Flash Sales</h2>
        </div>
        <div>
          <Image
            src="/group.png"
            alt="group"
            width={1000}
            height={1000}
            className="w-[302px] h-auto"
          />
        </div>
        <div className="flex space-x-4 mt-4 lg:mt-0">
          <button className="bg-slate-100 p-4 rounded-full">
            <FaArrowLeft />
          </button>
          <button className="bg-slate-100 p-4 rounded-full">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

