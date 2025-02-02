import React from 'react';

const Card = ({ title, description, link }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <a href={link} className="text-cyan-600 hover:underline">Learn more</a>
            </div>
        </div>
    );
};

export default Card;
