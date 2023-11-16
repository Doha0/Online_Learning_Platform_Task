import React from 'react';
import useCourses from '../../../hooks/Courses/useCourses';
import CourseCard from './CourseCard/CourseCard';

const Courses = () => {
    const [courses] = useCourses();
    return (
        <section>
            <div>
                {
                    courses.map(course => <CourseCard
                        key={course._id}
                        course={course}
                    ></CourseCard>)
                }
            </div>
        </section>
    );
};

export default Courses;