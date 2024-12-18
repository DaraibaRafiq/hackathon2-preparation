





import Image from "next/image";

export default function About() {
  return (
    <div className="max-w-[1370px] h-auto mx-auto p-4">
      <div className="w-[114px] h-[21px] mt-[100px] ml-[135px]">
        <ul className="font-poppins flex flex-row">
          <li className="w-[42px] h-[21px] text-[14px] opacity-50% font-poppins font-normal">Home</li>
          <p>/</p>
          <li className="w-[42px] h-[21px] text-[14px] font-poppins font-normal">About</li>
        </ul>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8 mt-[180px]">
        <div className="w-full md:w-[525px] ml-4 md:ml-0">
          <div className="w-[277px] h-[64px]">
            <h2 className="font-inter font-semibold text-[54px]">Our Story</h2>
          </div>
          <div className="w-full md:w-[525px] mt-[30px]">
            <p className="font-poppins font-normal text-[16px] text-black w-full md:w-[525px] mb-3 overflow-visible max-h-full">
              Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
            </p>
            <br />
            <p className="font-poppins font-normal text-[16px] text-black w-full md:w-[505px] mb-3 overflow-visible max-h-full">
              Exclusive has more than 1 million products to offer and is growing very fast. Exclusive offers a diverse assortment in categories ranging from consumer products to tech gadgets.
            </p>
          </div>
        </div>
        <div className="w-full md:w-[650px] h-auto">
          <Image src="/about1.png" alt="about" width={1000} height={1000} className="w-full h-auto md:h-[670px]" />
        </div>
      </div>
    </div>
  );
}
