

import React from 'react';
import { LuSendHorizontal } from "react-icons/lu";
import Image from 'next/image';
import { FiFacebook } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <div className='w-full h-auto flex flex-wrap justify-evenly pt-[10%] bg-[#000000] px-4'>
      <div className='w-full md:w-[20%] p-4'>
        <h2 className='w-full h-[24px] text-[24px] font-inter mb-4 font-[700] text-[#FAFAFA]'>Exclusive</h2>
        <h2 className='w-full h-[28px] font-poppins font-[500] mb-3 text-[20px] text-[#FAFAFA]'>Subscribe</h2>
        <p className='font-poppins text-[16px] w-full h-[24px] mb-3 font-normal text-[#FAFAFA]'>Get 10% off your first order</p>
        <button className='flex bg-[#000000] text-[#FAFAFA] w-full gap-[10px] pl-[16px] pt-[12px] pb-[12px] border-[1.5px] rounded-[4px] h-[48px]'>
          <input type="email" placeholder='Enter your email' className='w-full bg-[#000000] text-[#FAFAFA] px-2' />
          <LuSendHorizontal className='w-[20px] h-[18px] mt-1' />
        </button>
      </div>
      <div className='w-full md:w-[20%] p-4'>
        <h2 className='w-full h-[28px] font-poppins text-[20px] font-[500] text-[#FAFAFA] mb-4'>Support</h2>
        <p className='w-full h-[48px] font-poppins text-[16px] mb-3 font-normal text-[#FAFAFA]'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
        <p className='w-full h-[24px] font-poppins text-[16px] mb-3 font-normal text-[#FAFAFA]'>exclusive@gmail.com</p>
        <p className='w-full h-[24px] font-poppins text-[16px] mb-3 font-normal text-[#FAFAFA]'>+88015-88888-9999</p>
      </div>
      <div className='w-full md:w-[20%] p-4'>
        <h2 className='w-full h-[28px] font-poppins text-[20px] font-[500] text-[#FAFAFA] mb-4'>Account</h2>
        <p className='w-full h-[24px] font-poppins text-[16px] mb-3 font-normal text-[#FAFAFA]'>My Account</p>
        <p className='w-full h-[24px] font-poppins text-[16px] mb-3 font-normal text-[#FAFAFA]'>Login / Register</p>
        <p className='w-full h-[24px] font-poppins text-[16px] mb-3 font-normal text-[#FAFAFA]'>Cart</p>
        <p className='w-full h-[48px] font-poppins text-[16px] mb-3 font-normal text-[#FAFAFA]'>WishList</p>
        <p className='w-full h-[48px] font-poppins text-[16px] font-normal text-[#FAFAFA]'>Shop</p>
      </div>
      <div className='w-full md:w-[20%] p-4'>
        <h2 className='w-full h-[28px] font-poppins text-[20px] font-[500] text-[#FAFAFA] mb-4'>QuickLink</h2>
        <p className='w-full h-[24px] font-poppins text-[16px] font-normal mb-3 text-[#FAFAFA]'>Privacy Policy</p>
        <p className='w-full h-[24px] font-poppins text-[16px] font-normal mb-3 text-[#FAFAFA]'>Terms Of Use</p>
        <p className='w-full h-[24px] font-poppins text-[16px] font-normal mb-3 text-[#FAFAFA]'>FAQ</p>
        <p className='w-full h-[48px] font-poppins text-[16px] font-normal text-[#FAFAFA]'>Contact</p>
      </div>
      <div className='w-full md:w-[20%] p-4'>
        <h2 className='w-full h-[28px] font-poppins text-[20px] font-[500] text-[#FAFAFA] mb-4'>Download App</h2>
        <p className='w-full opacity-[70%] h-[24px] font-poppins text-[12px] font-normal mb-3 text-[#FAFAFA]'>Save $3 with App New User Only</p>
        <div className='flex flex-wrap gap-3'>
          <Image src="/Qrcode 1.png" alt="Qr code" width={80} height={80} className='w-[80px] h-[80px]' />
          <div>
            <Image src="/goo.png" alt="google" width={104} height={30} className='w-[104px] h-[30px] rounded-[4px] mt-1' />
            <Image src="/app.png" alt="app" width={104} height={30} className='w-[104px] h-[30px] rounded-[4px] mt-1' />
          </div>
        </div>
        <div className='flex gap-[24px] w-full h-[24px] text-[#FAFAFA] mt-3 justify-center md:justify-start'>
          <FiFacebook className='w-[24px] h-[24px]' />
          <CiTwitter className='w-[24px] h-[24px]' />
          <FaInstagram className='w-[24px] h-[24px]' />
          <FiLinkedin className='w-[24px] h-[24px]' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
