"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import TeamMember from "./TeamMember";


const teamMembers = [
    {
        name: "Harsh Gautam",
        role: "Founder",
        image: "/Team Image/founder.png",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Aditi Patel",
        role: "President",
        image: "/Team Image/president.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Peeyush Shandilya",
        role: "Secretary",
        image: "/Team Image/secretary.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
];

const TeamSection = ({ className }) => {
    const router = useRouter(); // Initialize the router
    const gridRef = useRef(null);
    const { scrollYProgress } = useScroll({
        container: gridRef,
        offset: ["start start", "end start"],
    });

    const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

    const third = Math.ceil(teamMembers.length / 3);
    const firstPart = teamMembers.slice(0, third);
    const secondPart = teamMembers.slice(third, 2 * third);
    const thirdPart = teamMembers.slice(2 * third);

    return (
        <div className={cn("items-start w-full", className)} ref={gridRef}>
            {/* Meet Our Team Heading */}
            <h1 className="text-5xl font-bold text-center text-white py-10 mb-[-50px]">
                Meet Our Team
            </h1>

            {/* Team Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-20 px-10">
                <div className="grid gap-10">
                    {firstPart.map((member, idx) => (
                        <motion.div style={{ y: translateFirst }} key={"grid-1" + idx}>
                            <TeamMember {...member} />
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10">
                    {secondPart.map((member, idx) => (
                        <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
                            <TeamMember {...member} />
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10">
                    {thirdPart.map((member, idx) => (
                        <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
                            <TeamMember {...member} />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* See More Button */}
            <div className="flex items-center justify-center "> {/* Centering the button */}
            <div className="relative inline-flex items-center justify-center group">
                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-green-100 to-green-500 group-hover:shadow-lg group-hover:shadow-green-500/50"></div>
                <button 
                    onClick={() => router.push("/AllTeamMember")} 
                    className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full transition-all duration-200"
                    role="button"
                >
                    All members
                </button>
            </div>
        </div>
        </div>
    );
};

export default TeamSection;
