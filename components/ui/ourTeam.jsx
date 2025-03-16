"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import TeamMember from "./TeamMember";
import Link from "next/link";

const teamMembers = [
  {
    name: "Harsh Gautam",
    role: "Founder",
    image: "/Team/founder.png",
    socialLinks: {
      instagram: "#",
      github: "#",
      linkedin: "https://www.linkedin.com/in/realharshgautam?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  },
  {
    name: "Aditi Patel",
    role: "President",
    image: "/Team/president.jpg",
    socialLinks: {
      instagram: "https://www.instagram.com/justwalkedoutofabook?igsh=MXI1ZmI4NzUydXBvcQ==",
      github: "https://github.com/Eviecoderella",
      linkedin: "https://www.linkedin.com/in/aditi-patel-ux2005?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  },
  {
    name: "Peeyush Shandilya",
    role: "Secretary",
    image: "/Team/secretary.jpg",
    socialLinks: {
      instagram: "https://www.instagram.com/peeyushshandilya?utm_source=qr&igsh=MjFiMDhrN2swdGZr",
      github: "https://github.com/Peeyush2003",
      linkedin: "https://www.linkedin.com/in/peeyush-shandilya-536b5a27?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  },
];

const TeamSection = ({ className }) => {
  const router = useRouter();
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Auto-sliding effect for mobile view
  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isMobile]);

  // For desktop view, show only the first two members
  const desktopMembers = teamMembers.slice(0, 3);

  return (
    <div className={cn("w-full flex flex-col items-center", className)} ref={gridRef}>
      {/* Meet Our Team Heading */}
      <h1 className="text-4xl font-bold text-center text-white py-6 mt-6 mx-auto">
        MEET OUR TEAM
      </h1>

      {/* Desktop View - Cards */}
      <div className="hidden md:flex max-w-screen-xl w-full mx-auto justify-center gap-6 py-10 px-4 md:px-8">
        {desktopMembers.map((member, idx) => (
          <div key={`desktop-${idx}`} className="flex-1 max-w-md mx-auto">
            <TeamMember {...member} />
          </div>
        ))}
      </div>

      {/* Mobile View - Auto Sliding Carousel */}
      <div className="md:hidden w-full relative py-10 px-4 mx-auto">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {teamMembers.map((member, idx) => (
              <div key={`mobile-${idx}`} className="mx-auto min-w-full flex justify-center">
                <div className="w-full max-w-xs">
                  <TeamMember {...member} />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Carousel Indicators */}
        <div className="flex justify-center items-center mt-4 gap-2">
          {teamMembers.map((_, idx) => (
            <button
              key={`indicator-${idx}`}
              className={`w-2 h-2 rounded-full ${currentSlide === idx ? 'bg-green-500 border-green-300' : ' border-green-300'}`}
              onClick={() => setCurrentSlide(idx)}
            />
          ))}
        </div>
      </div>

      {/* See More Button */}
      <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
        <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-green-100 to-green-700 group-hover:shadow-lg group-hover:shadow-green-500/50"></div>
        <Link href="/team">
          <button className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full transition-all duration-200">
            All Members
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TeamSection;