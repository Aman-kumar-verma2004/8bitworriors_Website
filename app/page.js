"use client"


import HeroSecton from "@/components/ui/Hero-Highlight";
import Fotter from "@/components/ui/Fotter.jsx";
import { motion } from "framer-motion";
import Features from "@/components/Features";
import Gallary from "@/components/ui/Gallary"
import OurTeam from "@/components/ui/OurTeam"


export default function Home() {
  return (
    <main className="overflow-hidden bg-black" >
      
      <HeroSecton />
      <Features />
      <Gallary />
      <OurTeam />
      <Fotter />
      

    </main>
  );
}



