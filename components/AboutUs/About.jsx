
import React from 'react';
import Cursor from './Cursor';
import Subnav from './Subnav';
import CourseCard from './CourseCard';
import './styles.css';

const About = () => {
    return (
        <div className="about-container">
            <Cursor />
            <h1 className="text-center text-4xl font-bold text-green-500 pt-24">About Us</h1>
            <section className="about-us flex items-center justify-between p-16">
                <p className="text-white text-lg leading-8 w-2/5">
                    8bitWarriors is a dynamic community of tech enthusiasts and programmers committed to fostering innovation, creativity, and technical excellence among students. It offers a platform to develop skills in various tech domains through workshops, hackathons, internships, mentorships, networking, guest lectures, and collaborative projects. The community emphasizes practical knowledge, problem-solving, and active participation in coding competitions, promoting a culture of learning and growth. Open to beginners and experienced tech enthusiasts alike, 8bitWarriors empowers members to innovate, collaborate, and thrive in a competitive environment while strengthening their expertise in engineering and technology.
                </p>
                <img src="laptop.jpg" alt="Laptop" className="w-1/2" />
            </section>
            <section className="courses text-center pt-24">
                <h1 className="text-4xl font-bold text-green-500">What we offer</h1>
                <div className="row1 flex justify-between flex-wrap mt-12">
                    <CourseCard imgSrc="workshops.jpg" title="Specialized Workshops" description="Engage in immersive, hands-on learning sessions designed to cover cutting-edge tools, technologies, and programming languages, tailored for both beginners and advanced learners." />
                    <CourseCard imgSrc="hackathons.jpg" title="Hackathons and Competitive Platforms" description="Participate in dynamic hackathons and competitions that challenge your creativity and technical expertise while fostering collaboration and problem-solving skills." />
                    <CourseCard imgSrc="projects.jpg" title="Collaborative Projects and Innovation" description="Contribute to impactful team projects across diverse domains such as software development, robotics, artificial intelligence, and more, enhancing your practical knowledge and professional portfolio." />
                </div>
                <div className="row2 flex justify-between flex-wrap mt-12">
                    <CourseCard imgSrc="mentorship.jpg" title="Mentorship and Career Guidance" description="Benefit from personalized guidance provided by experienced mentors and industry experts, helping you navigate challenges and achieve your technical and career aspirations." />
                    <CourseCard imgSrc="expert talks.jpg" title="Expert Talks and Industry Insights" description="Gain valuable insights through tech talks and guest lectures by industry leaders, keeping you informed about the latest trends and advancements in technology." />
                    <CourseCard imgSrc="Premium resouses.jpg" title="Access to Premium Resources" description="Leverage exclusive access to state-of-the-art tools, software, equipment, and curated learning materials to bring your ideas to life and achieve excellence." />
                </div>
            </section>
            <Subnav />
        </div>
    );
};

export default About;