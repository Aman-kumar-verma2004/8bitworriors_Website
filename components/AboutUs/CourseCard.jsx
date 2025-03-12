import React from 'react';

const CourseCard = ({ imgSrc, title, description }) => {
    return (
        <div className="bg-gray-900 text-white rounded-lg shadow-lg p-6 w-full sm:w-[48%] lg:w-[30%] min-h-auto flex flex-col items-center justify-between text-center overflow-hidden">
            <img src={imgSrc} alt={title} className="w-full max-w-[250px] h-auto object-cover rounded-md mb-4" />
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm mt-2 break-words leading-6 max-w-full text-wrap overflow-hidden">
                {description}
            </p>
        </div>
    );
};

export default CourseCard;