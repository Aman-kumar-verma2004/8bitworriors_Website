import React from 'react';

const Fotter = () => {
    return (
        <footer data-testid="flowbite-footer" className="w-full dark:bg-black md:flex md:items-center md:justify-between rounded-none bg-gray-50 pb-8 pt-16 shadow-none">
            <div className="mx-auto w-full max-w-8xl px-4">
                <div className="grid w-full justify-between gap-8 md:grid-cols-2">
                    <div className="mb-4 max-w-sm lg:mb-0">
                        <a className="flex items-center gap-3" href="/">
                            <img alt="" loading="lazy" width="32" height="32" decoding="async" src="/favicon.svg" style={{ color: 'transparent' }} />
                            <span className="text-xl font-semibold text-gray-900 dark:text-gray-100">Flowbite React</span>
                        </a>
                        <p className="mb-3 mt-4 max-w-sm text-gray-600 dark:text-gray-400">Flowbite is an ecosystem built on top of Tailwind CSS including a component library, block sections, a Figma design system and other resources.</p>
                        <p className="mb-3 mt-4 max-w-sm text-gray-600 dark:text-gray-400">Code licensed <a href="https://github.com/themesberg/flowbite-react/blob/main/LICENSE" rel="nofollow noopener noreferrer" target="_blank" className="text-cyan-600 hover:underline">MIT</a>, docs <a href="https://creativecommons.org/licenses/by/3.0/" rel="nofollow noopener noreferrer" target="_blank" className="text-cyan-600 hover:underline">CC BY 3.0</a></p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <h2 data-testid="flowbite-footer-title" className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Resources</h2>
                            <ul data-testid="footer-groupLink" className="flex flex-wrap text-sm flex-col space-y-4 text-gray-600 dark:text-gray-400">
                                <li className="me-4 last:mr-0 md:mr-6 text-base"><a href="https://github.com/themesberg/flowbite-react" className="hover:underline" rel="noopener" target="_blank">GitHub</a></li>
                                <li className="me-4 last:mr-0 md:mr-6 text-base"><a href="https://flowbite.com/" className="hover:underline" rel="noopener" target="_blank">Flowbite</a></li>
                                <li className="me-4 last:mr-0 md:mr-6 text-base"><a href="https://tailwindcss.com/" className="hover:underline" rel="nofollow noopener noreferrer" target="_blank">Tailwind CSS</a></li>
                                <li className="me-4 last:mr-0 md:mr-6 text-base"><a href="https://flowbite.com/figma/" className="hover:underline" rel="noopener" target="_blank">Figma</a></li>
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
                            <h2 data-testid="flowbite-footer-title" className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2>
                            <ul data-testid="footer-groupLink" className="flex flex-wrap text-sm flex-col space-y-4 text-gray-600 dark:text-gray-400">
                                <li className="me-4 last:mr-0 md:mr-6 text-base"><a href="https://flowbite.com/license/" className="hover:underline" rel="noopener" target="_blank">License</a></li>
                                <li className="me-4 last:mr-0 md:mr-6 text-base"><a href="https://flowbite.com/brand/" className="hover:underline" rel="noopener" target="_blank">Brand guideline</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr data-testid="footer-divider" className="my-6 w-full border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
                <div className="w-full text-center sm:flex sm:items-center sm:justify-center">
                    <div data-testid="flowbite-footer-copyright" className="text-gray-500 dark:text-gray-400 sm:text-center text-base">© 2025<a href="/" className="ml-1 hover:underline">All Rights Reserved. Flowbite™ is a registered trademark.</a></div>
                </div>
            </div>
        </footer>
    );
};

export default Fotter;