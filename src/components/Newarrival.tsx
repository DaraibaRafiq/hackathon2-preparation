



import React from 'react'
import Image from 'next/image'

const Newarrival = () => {
  return (
    <div className='container mx-auto px-4'>
      <div className='h-[40px] w-[128px] gap-[16px] flex ml-[130px] mt-10'>
        <div className='w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]'></div>
        <h2 className='font-poppins h-[20px] w-[90px] opacity[100%] pt-[10px] font-semibold text-[#DB4444]'>Featured</h2>
      </div>
      <div>
        <h2 className='w-[379px] h-[48px] font-inter font-semibold text-4xl ml-[130px]'>New Arrivals</h2>
      </div>
      <div className='w-full md:w-[1170px] h-auto gap-[150px] flex flex-col md:flex-row items-center mx-auto'>
        <div className='w-full md:w-[570px] h-[600px] mx-auto'>
          <Image src="/Frame 684.png" alt="frame684" width={1000} height={1000} className='w-full h-full' />
        </div>
        <div className='w-full md:w-[800px] mt-[30px] mx-auto'>
          <Image src="/Frame 685.png" alt="frame685" width={500} height={500} className='w-full h-[284px] md:h-auto mx-auto' />
          <div className='flex flex-col md:flex-row mt-[30px] gap-[50px]'>
            <Image src="/Frame 686.png" alt="frame686" width={400} height={400} className='w-[250px] h-[284px] md:h-auto mx-auto' />
            <Image src="/Frame 687.png" alt="frame687" width={400} height={400} className='w-[250px] h-[284px] md:h-auto mx-auto' />
          </div>
        </div>
      </div>
      <div className='mt-20 flex flex-wrap justify-center gap-[50px]'>
        <Image src="/Frame 701.png" alt="frame701" width={300} height={300} className='w-[256px] h-[161px]' />
        <Image src="/Frame 702.png" alt="frame702" width={300} height={300} className='w-[256px] h-[161px]' />
        <Image src="/Frame 704.png" alt="frame704" width={300} height={300} className='w-[256px] h-[161px]' />
      </div>
    </div>
  )
}

export default Newarrival;
