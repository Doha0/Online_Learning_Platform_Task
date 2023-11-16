import React from 'react';

const CourseCard = ({ course }) => {

    const { courseName, image, courseDetails, price, instructorName, instructorImage } = course;

    return (
        <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img className="object-cover w-full h-48" src={image} alt="course" />
            <div className="flex items-center justify-between px-4 py-2 bg-slate-800 dark:bg-slate-950">
                <h1 className="text-lg font-bold text-white">{price}$</h1>
                <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Enroll Now</button>
            </div>


            <div className="px-4 py-2">
                <h1 className="text-xl font-bold text-gray-800 dark:text-white heading-font">{courseName}</h1>
                <div className="flex items-center justify-between gap-x-2">
                    <h1 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">{instructorName}</h1>
                    <img className="object-cover w-10 h-10 rounded-lg" src={instructorImage} alt="instructor" />
                </div>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{courseDetails}</p>
            </div>
        </div>
    );
};

export default CourseCard;