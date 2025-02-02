import React from 'react';

const Fotter = () => {
    return (
        <footer data-testid="8BitWarrior-footer" className="w-full dark:bg-black md:flex md:items-center md:justify-between rounded-none bg-gray-50 pb-8 pt-16 shadow-none">
            <div className="m-auto w-full max-w-8xl px-4 mx-10">
                <div className="grid w-full justify-between gap-2 md:grid-cols-2">
                    <div className="mb-4 max-w-sm lg:mb-0">
                        <a className="flex items-center gap-3" href="/">
                            <img alt="" loading="lazy" width="172" height="32" decoding="async" src="/8bit.png" style={{ color: 'transparent' }} />
                            
                        </a>
                        <p className="mb-3 mt-4 max-w-sm text-gray-600 dark:text-gray-400">8-Bit Warriors is a dynamic tech community provides a collaborative ecosystem with coding resources, design assets, real-world projects, and networking opportunities.</p>
                        
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <h2 data-testid="flowbite-footer-title" className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Resources</h2>
                            <ul data-testid="footer-groupLink" className="flex flex-wrap text-sm flex-col space-y-4 text-gray-600 dark:text-gray-400">
                                <li className="me-4 last:mr-0 md:mr-6 text-base"><a href="#" className="hover:underline" rel="noopener" target="_blank">Tutorials and Courses</a></li>
                                <li className="me-4 last:mr-0 md:mr-6 text-base"><a href="#" className="hover:underline" rel="noopener" target="_blank">Training and Certificate</a></li>
                                <li className="me-4 last:mr-0 md:mr-6 text-base"><a href="#" className="hover:underline" rel="nofollow noopener noreferrer" target="_blank">Interview Preparation</a></li>
                                <li className="me-4 last:mr-0 md:mr-6 text-base"><a href="#" className="hover:underline" rel="noopener" target="_blank">Quiz Tests</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 data-testid="flowbite-footer-title" className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Help & Support</h2>
                            <ul data-testid="footer-groupLink" className="flex flex-wrap text-sm flex-col space-y-4 text-gray-600 dark:text-gray-400">
                                <li className="me-4 last:mr-0 md:mr-6 text-base"><a href="https://discord.gg/4eeurUVvTy" className="hover:underline" rel="nofollow noopener noreferrer" target="_blank">Discord</a></li>
                                <li className="me-4 last:mr-0 md:mr-6 text-base"><a href="https://github.com/themesberg/flowbite-react/discussions" className="hover:underline" rel="noopener" target="_blank">Github Discussions</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 data-testid="flowbite-footer-title" className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Contact Us</h2>
                            <ul data-testid="footer-groupLink" className="flex flex-wrap text-sm flex-col space-y-4 text-gray-600 dark:text-gray-400">
                                <li className="me-4 last:mr-0 md:mr-6 text-base"><a href="mailto:lead.8bitwarriors@gmail.com" className="hover:underline" rel="noopener" target="_blank">lead.8bitwarriors@gmail.com</a>
                                </li>
                                <li className="me-4 last:mr-0 md:mr-6 text-base"><a href="https://x.com/8bit_warriors" className="hover:underline" rel="noopener" target="_blank">X</a></li>
                                <li className="me-4 last:mr-0 md:mr-6 text-base"><a href="https://www.instagram.com/8bit_warriors/" className="hover:underline" rel="noopener" target="_blank">Instagram</a></li>
                                <li className="me-4 last:mr-0 md:mr-6 text-base"><a href="https://www.linkedin.com/company/8bit-warriors/" className="hover:underline" rel="noopener" target="_blank">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr data-testid="footer-divider" className="my-6 w-full border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
                <div className="w-full text-center sm:flex sm:items-center sm:justify-center">
                    <div data-testid="flowbite-footer-copyright" className="text-gray-500 dark:text-gray-400 sm:text-center text-base">© 2025 <a href="/" className="ml-1 hover:underline">8 bit Warriors™ All Rights Reserved.</a></div>
                </div>
            </div>
        </footer>
    );
};

export default Fotter;