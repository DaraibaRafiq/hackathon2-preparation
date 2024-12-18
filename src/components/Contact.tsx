
import Image from "next/image";

function Contact() {
    return (
        <div className="max-w-[1370px] h-auto mx-auto p-4">
            <div className="w-[114px] h-[21px] mt-[100px] mx-auto">
                <ul className="font-poppins flex flex-row justify-center">
                    <li className="w-[42px] h-[21px] text-[14px] opacity-50% font-poppins font-normal">Home</li>
                    <p>/</p>
                    <li className="w-[42px] h-[21px] text-[14px] font-poppins font-normal">Contact</li>
                </ul>
            </div>
            <div className="flex flex-col md:flex-row gap-8 mt-[100px] mx-auto">
                <div className="w-full md:w-[340px] h-auto mx-auto">
                    <Image src="/Frame 858.png" alt="frame" width={300} height={300} className="mx-auto" />
                </div>
                <div className="w-full md:w-[800px] h-auto mx-auto">
                    <Image src="/Frame 855.png" alt="frame855" width={1000} height={1000} className="mx-auto" />
                </div>
            </div>
        </div>
    );
}

export default Contact;
