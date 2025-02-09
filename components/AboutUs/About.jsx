import React from 'react';
import Cursor from './Cursor';
import Subnav from './Subnav';
import CourseCard from './CourseCard';
import './styles.css';

const About = () => {
    return (
        <div className="about-container overflow-x-hidden px-4 sm:px-8 lg:px-16">
            <Cursor />
            <h1 className="text-4xl font-bold text-center text-white pb-10 sm:text-5xl lg:text-6xl xl:text-8xl tracking-tight mt-10">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-green-600 to-green-900 drop-shadow-lg">
                    About Us
                </span>
            </h1>

            {/* About Section */}
            <section className="about-us flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16 gap-8">
    {/* Full Content for Desktop */}
    <p className="hidden lg:block text-white text-lg leading-8 w-full lg:w-2/5 text-center lg:text-left break-words">
        8bitWarriors is a dynamic community of tech enthusiasts and programmers committed to fostering innovation, creativity, and technical excellence among students. It offers a platform to develop skills in various tech domains through workshops, hackathons, internships, mentorships, networking, guest lectures, and collaborative projects. The community emphasizes practical knowledge, problem-solving, and active participation in coding competitions, promoting a culture of learning and growth. Open to beginners and experienced tech enthusiasts alike, 8bitWarriors empowers members to innovate, collaborate, and thrive in a competitive environment while strengthening their expertise in engineering and technology.
    </p>

    {/* Shorter Content for Mobile */}
    <p className="lg:hidden text-white text-base leading-6 w-full text-center break-words">
        8bitWarriors is a community for tech enthusiasts, fostering innovation, skills, and collaboration through workshops, hackathons, and mentorship.
    </p>

    {/* Image Section */}
    <img src="/AboutUs/laptop1.jpg" alt="Laptop" className="w-full lg:w-1/2 max-w-full h-auto rounded-lg shadow-lg" />
</section>


            {/* Courses Section */}
            <section className="courses text-center pt-24">
            <h1 className="text-4xl font-bold text-center text-white pb-10 sm:text-3xl lg:text-4xl xl:text-6xl tracking-tight mt-10">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-green-600 to-green-900 drop-shadow-lg">
                    What We Offer
                </span>
            </h1>

                {/* Responsive Course Cards */}
                <div className="flex flex-wrap justify-center gap-8 mt-12 w-full">
                    <CourseCard imgSrc="/AboutUs/workshops.jpg" title="Specialized Workshops" description="Engage in immersive, hands-on learning sessions designed to cover cutting-edge tools, technologies, and programming languages, tailored for both beginners and advanced learners." />
                    <CourseCard imgSrc="/AboutUs/hackathons.jpg" title="Hackathons and Competitive Platforms" description="Participate in dynamic hackathons and competitions that challenge your creativity and technical expertise while fostering collaboration and problem-solving skills." />
                    <CourseCard imgSrc="/AboutUs/projects.jpg" title="Collaborative Projects and Innovation" description="Contribute to impactful team projects across diverse domains such as software development, robotics, artificial intelligence, and more, enhancing your practical knowledge and professional portfolio." />
                    <CourseCard imgSrc="/AboutUs/mentorship.jpg" title="Mentorship and Career Guidance" description="Benefit from personalized guidance provided by experienced mentors and industry experts, helping you navigate challenges and achieve your technical and career aspirations." />
                    <CourseCard imgSrc="/AboutUs/expert talks.jpg" title="Expert Talks and Industry Insights" description="Gain valuable insights through tech talks and guest lectures by industry leaders, keeping you informed about the latest trends and advancements in technology." />
                    <CourseCard imgSrc="/AboutUs/Premium resouses.jpg" title="Access to Premium Resources" description="Leverage exclusive access to state-of-the-art tools, software, equipment, and curated learning materials to bring your ideas to life and achieve excellence." />
                </div>
            </section>

            <Subnav />
        </div>
    );
};

export default About;
