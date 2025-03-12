"use client"


import HeroSecton from "@/components/ui/Hero-Highlight";
import TeamSection from "@/components/ui/ourTeam.jsx";
import Fotter from "@/components/ui/Fotter.jsx";
import { motion } from "framer-motion";
import Features from "@/components/Features";
import Gallary from "@/components/ui/Gallary"



export default function Home() {
  return (
    <main className="overflow-hidden bg-black" >
      
      <HeroSecton />
      <Features />
      <Gallary />
      <TeamSection />
      <Fotter />
      

    </main>
  );
}



