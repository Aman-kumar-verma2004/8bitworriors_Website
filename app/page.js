"use client"

import { useRouter } from 'next/navigation';

import HeroSecton from "@/components/ui/Hero-Highlight";
import Fotter from "@/components/ui/Fotter.jsx";
import { motion } from "framer-motion";
import Features from "@/components/Features";

import OurTeam from "@/components/ui/OurTeam"


export default function Home() {
  return (
    <main className="overflow-hidden bg-black" >
      
      <HeroSecton />
      <Features />
      <OurTeam />
      
      <Fotter />
      

    </main>
  );
}



