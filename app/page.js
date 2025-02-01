"use client"

import HeroSecton from "@/components/ui/Hero-Highlight";
import Fotter from "@/components/ui/Fotter.jsx";
import { motion } from "framer-motion";
import Features from "@/components/Features";



export default function Home() {
  return (
    <main className="overflow-hidden" >
      
      <HeroSecton />
      <Features />


      <Fotter />
      

    </main>
  );
}



