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
            linkedin: "https://www.linkedin.com/in/realharshgautam?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
    },
    {
        name: "Aditi Patel",
        role: "President",
        image: "/Team Image/president.jpg",
        socialLinks: {
            instagram: "https://www.instagram.com/justwalkedoutofabook?igsh=MXI1ZmI4NzUydXBvcQ==",
            github: "https://github.com/Eviecoderella",
            linkedin: "https://www.linkedin.com/in/aditi-patel-ux2005?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
    },
    {
        name: "Peeyush Shandilya",
        role: "Secretary",
        image: "/Team Image/secretary.jpg",
        socialLinks: {
            instagram: "https://www.instagram.com/peeyushshandilya?utm_source=qr&igsh=MjFiMDhrN2swdGZr",
            github: "https://github.com/Peeyush2003",
            linkedin: "https://www.linkedin.com/in/peeyush-shandilya-536b5a279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
    },
    {
        name: "Aman Kumar Verma",
        role: "Tech Lead",
        image: "/Team Image/aman.jpg",
        socialLinks: {
            instagram: "https://www.instagram.com/itz_aman_7280/",
            github: "https://github.com/Aman-kumar-verma2004",
            linkedin: "https://www.linkedin.com/in/aman-kumar-verma-71104b24b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        }, 
    },
    {
        name: "Abhishek Parihar",
        role: "Tech Team",
        image: "/Team Image/abhi1.jpg",
        socialLinks: {
            instagram: "https://www.instagram.com/abhishekparihar3213?igsh=MW1tZHoycWNpczRiOQ==",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Aniket Jatav",
        role: "Tech team",
        image: "/Team Image/aniket.jpg",
        socialLinks: {
            instagram: "https://www.instagram.com/5913_aniket?igsh=aGowZDlzZXpuY3px",
            github: "#",
            linkedin: "https://www.linkedin.com/in/aniket-jatav-abb2a6285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
    },
    {
        name: "Vaidehi Verma",
        role: "Tech team",
        image: "/Team Image/vaidehi.jpg",
        socialLinks: {
            instagram: "#",
            github: "https://github.com/Vaidehiver2301",
            linkedin: "https://www.linkedin.com/in/vaidehi-verma-345875288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
    },
    {
        name: "Soumya Singh",
        role: "Tech team",
        image: "/Team Image/Soumya.jpg",
        socialLinks: {
            instagram: "https://www.instagram.com/soumya_1611?igsh=Z21paWVmMjNjODk3",
            github: "https://github.com/Soumyakhushi1116",
            linkedin: "https://www.linkedin.com/in/soumya-singh-b4a628286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
    },
    {
        name: "Sarvagya Sharma",
        role: "VideoGrapher",
        image: "/Team Image/SARVAGYA SHARMA.jpg",
        socialLinks: {
            instagram: "https://www.instagram.com/sarvagya_6600?igsh=eTZqcDlhMzFhbnJi",
            github: "#",
            linkedin: "https://www.linkedin.com/in/sarvagya-sharma-b76588217/",
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
            instagram: "https://www.instagram.com/btwlil_shine?igsh=bDZkOWo4MGVxM2po",
            github: "#",
            linkedin: "https://www.linkedin.com/in/muskan-vishwakarma-5b69892b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
    },
    {
        name: "Ronak Gupta",
        role: "Social Media Team",
        image: "/Team Image/RONAK GUPTA.jpg",
        socialLinks: {
            instagram: "https://www.instagram.com/ronak.gupta_12?utm_source=qr&igsh=MWhmZmZ1NXZ0dDg2Mw==",
            github: "https://github.com/ronak-RG",
            linkedin: "https://www.linkedin.com/in/ronak-gupta-755157326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
    },
    {
        name: "Revat Singh Pawar",
        role: "Event Management Lead",
        image: "/Team Image/REVAT SINGH PAWAR.jpg",
        socialLinks: {
            instagram: "https://www.instagram.com/raunakqc?igsh=NWJ5ZnhoN3YzcmRr",
            github: "#",
            linkedin: "https://www.linkedin.com/in/revat-singh-pawar-a58023294",
        },
    },
    {
        name: "Saransh Tiwari",
        role: "Event Management Team",
        image: "/Team Image/SARANSH TIWARI.jpg",
        socialLinks: {
            instagram: "https://www.instagram.com/saransh_t47?igsh=eWZldHh2M3Zod3U1",
            github: "#",
            linkedin: "https://in.linkedin.com/in/saransh-tiwari-2b28bb330",
        },
    },
    {
        name: "dharmesh Krish mitaulia",
        role: "Event Management Team",
        image: "/Team Image/krish.png",
        socialLinks: {
            instagram: "https://www.instagram.com/18noooodles?igsh=MXg4YWN6Y2ZqYm1ubg==",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Rishi Vashistha",
        role: "Creative Head",
        image: "/Team Image/RISHI VASHISTHA.jpg",
        socialLinks: {
            instagram: "https://www.instagram.com/rishivashistha_?igsh=MTJhb3lrbDluMGRvdg==",
            github: "#",
            linkedin: "https://www.linkedin.com/in/rishi-vashistha-181015242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
    },
    {
        name: "Rajveer singh parmar",
        role: "Creative Team",
        image: "/Team Image/RAJVEER SINGH PARMAR.jpg",
        socialLinks: {
            instagram: "https://www.instagram.com/rajveer.exe?igsh=MXN3bXo5ajV2dDRsZg==",
            github: "#",
            linkedin: "https://www.linkedin.com/in/rajveer-singh-parmar-a072a324b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
    },
    {
        name: "Ayushman Gupta",
        role: "Creative Team",
        image: "/Team Image/Ayushman.jpg",
        socialLinks: {
            instagram: "https://www.instagram.com/ayush.man2003?igsh=cGRkbWVxOW5rMjBv",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "rudransh Soni",
        role: "Creative Team",
        image: "/Team Image/rudransh.png",
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
            instagram: "https://www.instagram.com/kritika.mittal_?igsh=MTBuMHFkYjdnYWV3eQ==",
            github: "https://github.com/KritikaM11",
            linkedin: "#",
        },
    },
    {
        name: "Radhika Thakur",
        role: "Content Team",
        image: "/Team Image/radhika.jpg",
        socialLinks: {
            instagram: "https://www.instagram.com/radhikathakur_79?igsh=aHZ4MDAxaGUwYmd3",
            github: "https://github.com/Radhika74",
            linkedin: "https://www.linkedin.com/in/radhika-thakur-b43075260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
    },
    {
        name: "Aditya Rai",
        role: "Marketing Lead",
        image: "/Team Image/ADITYA RAI.jpg",
        socialLinks: {
            instagram: "https://www.instagram.com/adityarai_10?igsh=MXMxeDJwbWsyNG8yaQ==",
            github: "#",
            linkedin: "https://www.linkedin.com/in/adityarai10?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
    },
    {
        name: "Divyanshu Singh Chauhan",
        role: "Marketing Team",
        image: "/Team Image/DIVYANSHU SINGH CHOUHAN.jpg",
        socialLinks: {
            instagram: "#",
            github: "https://github.com/TL-Divyanshu",
            linkedin: "https://www.linkedin.com/in/divyanshu-singh-chouhan-626a60276?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8EPMekA6SQqwhQ%2BeChdQoQ%3D%3D",
        },
    },
    {
        name: "Manshvi Jaiswal",
        role: "Marketing Team",
        image: "/Team Image/MANSHVI JAISWAL.jpg",
        socialLinks: {
            instagram: "https://www.instagram.com/manshvi_jaiswal?igsh=YmlpajlxbjU4aW12",
            github: "https://github.com/Manshvijaiswal",
            linkedin: "https://www.linkedin.com/in/manshvi-jaiswal-78a190286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
    },
    {
        name: "Abhishek Goswami",
        role: "Graphic Team",
        image: "/Team Image/ABHISHEK GOSWAMI.jpg",
        socialLinks: {
            instagram: "https://www.instagram.com/goswami_abhishek_4511?igsh=bXVyNzhtZzB2cWFu",
            github: "https://github.com/abhishekgoswami4511",
            linkedin: "https://www.linkedin.com/in/abhishek-goswami-8981492a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
    },
    {
        name: "Charu Jain",
        role: "Graphic Team",
        image: "/Team Image/CHARU JAIN.jpg",
        socialLinks: {
            instagram: "https://www.instagram.com/ft.charuu?igsh=bnRwMjV2bjZnY3Jv",
            github: "#",
            linkedin: "https://in.linkedin.com/in/charu-jain-10b36b277",
        },
    },
    {
        name: "KANCHAN KUSHWAHA",
        role: "Research and Development",
        image: "/Team Image/KANCHAN KUSHWAHA.jpg",
        socialLinks: {
            instagram: "https://www.instagram.com/kaxchan._/?hl=en",
            github: "https://github.com/kanchankushwaha1",
            linkedin: "https://www.linkedin.com/in/kanchan-kushwaha/",
        },
    },
    {
        name: "Twinkle Kasera",
        role: "Research and Developemnt",
        image: "/Team Image/TWINKLE KASERA.jpg",
        socialLinks: {
            instagram: "https://www.instagram.com/ktwin_kle?igsh=YzM5emM1NXBmNHh3",
            github: "#",
            linkedin: "https://www.linkedin.com/in/twinkle-kasera-b9594a30b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
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