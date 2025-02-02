"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import TeamMember from "./TeamMember";

const teamMembers = [
    {
        name: "Kabir Asani",
        role: "@KabirAsani",
        image: "/images/landing/avatars/avatar-kabir.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Paul Bratslavsky",
        role: "@codingthirty",
        image: "/images/landing/avatars/avatar-paul.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Paul Bratslavsky",
        role: "@codingthirty",
        image: "/images/landing/avatars/avatar-paul.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Paul Bratslavsky",
        role: "@codingthirty",
        image: "/images/landing/avatars/avatar-paul.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Paul Bratslavsky",
        role: "@codingthirty",
        image: "/images/landing/avatars/avatar-paul.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Paul Bratslavsky",
        role: "@codingthirty",
        image: "/images/landing/avatars/avatar-paul.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Paul Bratslavsky",
        role: "@codingthirty",
        image: "/images/landing/avatars/avatar-paul.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
];

const TeamSection = ({ className }) => {
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
        <div className={cn(" items-start  w-full", className)} ref={gridRef}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10" ref={gridRef}>
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
        </div>
    );
};

export default TeamSection;
