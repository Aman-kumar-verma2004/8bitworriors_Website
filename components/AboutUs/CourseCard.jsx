import React from 'react';

const CourseCard = ({ imgSrc, title, description }) => {
    return (
        <div className="course-card bg-gray-800 p-6 rounded-lg mb-8 transition-transform transform hover:scale-110 shadow-lg">
            <img src={imgSrc} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-300">{description}</p>
        </div>
    );
};

export default CourseCard;