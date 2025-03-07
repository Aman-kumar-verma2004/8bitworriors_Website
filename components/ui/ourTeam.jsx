"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
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
      linkedin: "#",
    },
  },
  {
    name: "Aditi Patel",
    role: "President",
    image: "/Team/president.jpg",
    socialLinks: {
      instagram: "#",
      github: "#",
      linkedin: "#",
    },
  },
  {
    name: "Peeyush Shandilya",
    role: "Secretary",
    image: "/Team/secretary.jpg",
    socialLinks: {
      instagram: "#",
      github: "#",
      linkedin: "#",
    },
  },
];

const TeamSection = ({ className }) => {
  const router = useRouter();
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll();

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, 0]);

  const third = Math.ceil(teamMembers.length / 3);
  const firstPart = teamMembers.slice(0, third);
  const secondPart = teamMembers.slice(third, 2 * third);
  const thirdPart = teamMembers.slice(2 * third);

  return (
    <div className={cn("w-full flex flex-col items-center", className)} ref={gridRef}>
      {/* Meet Our Team Heading */}
      <h1 className="text-4xl font-bold text-center text-white py-6 mt-6">
        Meet Our Team
      </h1>

      {/* Team Members Grid */}
      <div className="max-w-screen-xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10 px-4 md:px-8">
        <div className="grid gap-10 place-items-center">
          {firstPart.map((member, idx) => (
            <motion.div style={{ y: 0 }} key={`grid-1-${idx}`}>
              <TeamMember {...member} />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10 place-items-center">
          {secondPart.map((member, idx) => (
            <motion.div style={{ y: 0 }} key={`grid-2-${idx}`}>
              <TeamMember {...member} />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10 place-items-center">
          {thirdPart.map((member, idx) => (
            <motion.div style={{ y: 0 }} key={`grid-3-${idx}`}>
              <TeamMember {...member} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* See More Button */}
      <div className="flex items-center justify-center">
        <div className="relative inline-flex items-center justify-center group">
          <Link href="/team">
            <button className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full transition-all duration-200">
              All Members
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
