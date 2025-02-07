import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

 const TeamMember = ({ name, role, image, socialLinks = {} }) => {
    return (
        <div className="relative w-[250px] h-[320px] sm:w-[280px] sm:h-[350px] md:w-[300px] md:h-[370px] m-5 overflow-hidden rounded-2xl shadow-lg bg-[#43346d99] flex justify-center items-center group">
            <div className="w-full h-full">
                <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-[-160px] w-full h-[160px] flex flex-col justify-center items-center backdrop-blur-md shadow-[0_-10px_10px_rgba(0,0,0,0.1)] border border-white/10 rounded-2xl transition-all duration-500 delay-[0.65s] group-hover:bottom-0 group-hover:delay-0">
                <div className="text-center">
                    <h3 className="uppercase text-white text-lg font-medium tracking-wider mb-2 opacity-0 transform translate-y-[-20px] transition-all duration-500 delay-[0.6s] group-hover:opacity-100 group-hover:translate-y-0">
                        {name} <br />
                        <span className="text-sm font-light normal-case">{role}</span>
                    </h3>
                </div>
                <ul className="flex mt-2">
                    {socialLinks.instagram && (
                        <li className="mx-2.5 transform translate-y-10 transition-all duration-500 delay-\[0.2s\] opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                            <a href={socialLinks?.instagram} className="text-white text-2xl">
                                <IoLogoInstagram />
                            </a>
                        </li>
                    )}
                    {socialLinks.github && (
                        <li className="mx-2.5 transform translate-y-10 transition-all duration-500 delay-[0.4s] opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                            <a href={socialLinks.github} className="text-white text-2xl">
                                <FaGithub/>
                            </a>
                        </li>
                    )}
                    {socialLinks.linkedin && (
                        <li className="mx-2.5 transform translate-y-10 transition-all duration-500 delay-[0.6s] opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                            <a href={socialLinks.linkedin} className="text-white text-2xl">
                                < FaLinkedin />
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};



export default TeamMember;