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
        name: "Revat Singh Pawar",
        role: "Event Management Lead",
        image: "/Team Image/REVAT SINGH PAWAR.jpg",
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
        name: "Rishi Vashistha",
        role: "Creative Head",
        image: "/Team Image/RISHI VASHISTHA.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Rajveer singh parmar",
        role: "Creative Head",
        image: "/Team Image/RAJVEER SINGH PARMAR.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Ayushman Gupta",
        role: "Creative Team",
        image: "/Team Image/Ayushman.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Kritika Mittal",
        role: "Content Team",
        image: "/Team Image/KRITIKA MITTAL.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Radhika Thakur",
        role: "Content Team",
        image: "/Team Image/radhika.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Aditya Rai",
        role: "Marketing Lead",
        image: "/Team Image/ADITYA RAI.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Divyanshu Singh Chauhan",
        role: "Marketing Team",
        image: "/Team Image/DIVYANSHU SINGH CHOUHAN.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Manshvi Jaiswal",
        role: "Marketing Team",
        image: "/Team Image/MANSHVI JAISWAL.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Abhishek Goswami",
        role: "Graphic Team",
        image: "/Team Image/ABHISHEK GOSWAMI.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Charu Jain",
        role: "Graphic Team",
        image: "/Team Image/CHARU JAIN.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "KANCHAN KUSHWAHA",
        role: "Research and Development",
        image: "/Team Image/KANCHAN KUSHWAHA.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Twinkle Kasera",
        role: "Research and Developemnt",
        image: "/Team Image/TWINKLE KASERA.jpg",
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
    <h1 className="text-4xl font-bold text-center text-white pb-10 sm:text-5xl lg:text-6xl xl:text-8xl tracking-tight">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-green-600 to-green-900 drop-shadow-lg">
            Our Core Team
        </span>
    </h1>

    {/* Centering Cards on Mobile */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {allTeamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
        ))}
    </div>
</div>
    );
};

export default AllTeamMembers;