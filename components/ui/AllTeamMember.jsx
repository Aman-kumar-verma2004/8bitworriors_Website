"use client";
import TeamMember from "./TeamMember";

const allTeamMembers = [
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
        name: "Aman Kumar Verma",
        role: "Tech Lead",
        image: "/Team Image/aman.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        }, 
    },
    {
        name: "Vaidehi Verma",
        role: "Tech team",
        image: "/Team Image/vaidehi.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Abhishek Kumar",
        role: "Treasurer",
        image: "/Team Image/savi.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Rewat Singh Pawar",
        role: "Event Management Lead",
        image: "/Team Image/REVAT SINGH PAWAR.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Rajveer Singh ",
        role: "Technical Lead",
        image: "/Team Image/techlead.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Jane Smith",
        role: "Technical Lead",
        image: "/Team Image/techlead.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Jane Smith",
        role: "Technical Lead",
        image: "/Team Image/techlead.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Jane Smith",
        role: "Technical Lead",
        image: "/Team Image/techlead.jpg",
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
        name: "Abhishek Parihar",
        role: "Tech Team",
        image: "/Team Image/abhishek parihar.png",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Soumya Singh",
        role: "Tech team",
        image: "/Team Image/Soumya.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Muskan Vishwakarma",
        role: "Social Media Lead",
        image: "/Team Image/MUSKAN VISHWAKARMA.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Saransh Tiwari",
        role: "Event Management Team",
        image: "/Team Image/SARANSH TIWARI.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Jane Smith",
        role: "Technical Lead",
        image: "/Team Image/techlead.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Jane Smith",
        role: "Technical Lead",
        image: "/Team Image/techlead.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Jane Smith",
        role: "Technical Lead",
        image: "/Team Image/techlead.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Jane Smith",
        role: "Technical Lead",
        image: "/Team Image/techlead.jpg",
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
    {
        name: "Aniket Jatav",
        role: "Tech team",
        image: "/Team Image/aniket.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Sarvagya Sharma",
        role: "VideoGrapher",
        image: "/Team Image/SARVAGYA SHARMA.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Ronak Gupta",
        role: "Social Media Team",
        image: "/Team Image/RONAK GUPTA.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Rishi Vasistha",
        role: "Creative Head",
        image: "/Team Image/RISHI VASISTHA.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Jane Smith",
        role: "Technical Lead",
        image: "/Team Image/techlead.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Jane Smith",
        role: "Technical Lead",
        image: "/Team Image/techlead.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Jane Smith",
        role: "Technical Lead",
        image: "/Team Image/techlead.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    
    
];

const AllTeamMembers = () => {
    return (
        <div className="max-w-6xl mx-auto py-20 px-5">
            <h1 className="text-5xl font-extrabold text-center text-white pb-10">
                Our Full Team
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {allTeamMembers.map((member, index) => (
                    <TeamMember key={index} {...member} />
                ))}
            </div>
        </div>
    );
};

export default AllTeamMembers;