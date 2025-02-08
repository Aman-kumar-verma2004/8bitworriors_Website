import React from 'react';

const Fotter = () => {
    return (
        <footer data-testid="8BitWarrior-footer" className="w-full dark:bg-black flex flex-col items-center justify-center bg-gray-50 pb-8 pt-16 shadow-none">
            <div className="w-full max-w-screen-xl px-4 mx-auto">
                <div className="grid w-full justify-between gap-2 md:grid-cols-2">
                    <div className="mb-4 max-w-sm lg:mb-0">
                        <a className="flex items-center gap-3" href="/">
                            <img alt="" loading="lazy" width="172" height="32" decoding="async" src="/8bit.png" style={{ color: 'transparent' }} />
                        </a>
                        <p className="mb-3 mt-4 max-w-sm text-gray-600 dark:text-gray-400">
                            8-Bit Warriors is a dynamic tech community providing a collaborative ecosystem with coding resources, design assets, real-world projects, and networking opportunities.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Resources</h2>
                            <ul className="flex flex-wrap text-sm flex-col space-y-4 text-gray-600 dark:text-gray-400">
                                <li className="text-base"><a href="#" className="hover:underline">Tutorials and Courses</a></li>
                                <li className="text-base"><a href="#" className="hover:underline">Training and Certificate</a></li>
                                <li className="text-base"><a href="#" className="hover:underline">Interview Preparation</a></li>
                                <li className="text-base"><a href="#" className="hover:underline">Quiz Tests</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Help & Support</h2>
                            <ul className="flex flex-wrap text-sm flex-col space-y-4 text-gray-600 dark:text-gray-400">
                                <li className="text-base"><a href="https://discord.gg/9negnSE25v" target="_blank" className="hover:underline">Discord</a></li>
                                <li className="text-base"><a href="" className="hover:underline">GitHub Discussions</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Contact Us</h2>
                            <ul className="flex flex-wrap text-sm flex-col space-y-4 text-gray-600 dark:text-gray-400">
                                <li className="text-base"><a href="mailto:lead.8bitwarriors@gmail.com" className="hover:underline">lead.8bitwarriors@gmail.com</a></li>
                                <li className="text-base"><a href="https://x.com/8bit_warriors" className="hover:underline">X</a></li>
                                <li className="text-base"><a href="https://www.instagram.com/8bit_warriors/" className="hover:underline">Instagram</a></li>
                                <li className="text-base"><a href="https://www.linkedin.com/company/8bit-warriors/" className="hover:underline">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
                <div className="w-full text-center">
                    <div className="text-gray-500 dark:text-gray-400 sm:text-center text-base">
                        © 2025 <a href="/" className="ml-1 hover:underline">8bit Warriors™ All Rights Reserved.</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Fotter;
