
import React from 'react'
import Image from 'next/image'

const Frame = () => {
  return (
    <div className='ml-32 mt-12 flex flex-row justify-center items-center gap-7 mr-28'>
      <div className='w-full md:w-[1170px] h-auto'>
        <Image src="/Frame 600.png" alt="frame" width={1200} height={1000} />
      </div>
    </div>
  )
}

export default Frame

