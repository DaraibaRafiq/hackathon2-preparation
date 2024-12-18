



import React from 'react';
import Image from 'next/image';

const Card1 = () => {
  return (
    <div className="mt-12 flex flex-wrap lg:flex-nowrap justify-center items-center gap-7 px-8 md:px-4">
      <div>
        <Image
          src="/1.png"
          alt="1"
          width={300}
          height={300}
          className="w-[270px] h-[350px] sm:w-[200px] sm:h-[250px] md:w-[150px] md:h-[200px]"
        />
      </div>
      <div>
        <Image
          src="/2.png"
          alt="2"
          width={300}
          height={300}
          className="w-[270px] h-[350px] sm:w-[200px] sm:h-[250px] md:w-[150px] md:h-[200px]"
        />
      </div>
      <div>
        <Image
          src="/3.png"
          alt="3"
          width={300}
          height={300}
          className="w-[270px] h-[350px] sm:w-[200px] sm:h-[250px] md:w-[150px] md:h-[200px]"
        />
      </div>
      <div>
        <Image
          src="/4.png"
          alt="4"
          width={300}
          height={300}
          className="w-[270px] h-[350px] sm:w-[200px] sm:h-[250px] md:w-[150px] md:h-[200px]"
        />
      </div>
      <div>
        <Image
          src="/4.png"
          alt="4"
          width={300}
          height={300}
          className="w-[270px] h-[350px] sm:w-[200px] sm:h-[250px] md:w-[150px] md:h-[200px]"
        />
      </div>
    </div>
  );
};

export default Card1;


