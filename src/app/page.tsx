
import Best from "@/components/Best";
import Card1 from "@/components/Card1";
import { Category } from "@/components/Category";
import Frame from "@/components/Frame";
import Hero, { Hero1, } from "@/components/Hero";
import Newarrival from "@/components/Newarrival";
import Products from "@/components/Products";
import Image from "next/image";

export default function Home() {
  return (
    <div>

      <Hero/>
      <Hero1/>
      <Card1/>
      <Category/>
      <Best/>
      <Frame/>
      <Products/>
      <Newarrival/>
      <br />
    
    </div>
  );
}
