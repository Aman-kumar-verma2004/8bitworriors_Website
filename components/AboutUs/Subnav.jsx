import React from 'react';
import Link from './Link';

const Subnav = () => {
    const links = [
        { href: "https://wavexr.com/team/", text: "The Team" },
        { href: "https://wavexr.com/company-values/", text: "Our Values" },
        { href: "https://wavexr.com/careers/", text: "Careers" },
        { href: "https://wavexr.com/press/", text: "Press" }
    ];

    return (
        <div className="subnav flex justify-around mt-12">
            {links.map((link, index) => (
                <Link key={index} href={link.href} text={link.text} delay={400 + index * 100} />
            ))}
        </div>
    );
};

export default Subnav;