import React from 'react';

const Link = ({ href, text, delay }) => {
    return (
        <div className={`link animate-from-bottom`} data-delay={delay}>
            <a href={href} className="hover:underline text-white">
                {text}
            </a>
        </div>
    );
};

export default Link;