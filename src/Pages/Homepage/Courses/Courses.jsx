import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard/CourseCard';
import "./Courses.css"
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Courses = () => {

    const [category, setCategory] = useState([]);
    const [selectedTab, setSelectedTab] = useState('Development');

    useEffect(() => {
        fetch(`https://olp-task-server.vercel.app/courses/${selectedTab}`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => setCategory(data)
            )
    }, [selectedTab]);

    const handleTabSelect = (id) => {
        setSelectedTab(id);
    };

    return (
        <section>

            <Tabs>
                <TabList>
                    <Tab onClick={() => handleTabSelect('Development')}>Development</Tab>
                    <Tab onClick={() => handleTabSelect('Design')}>Design</Tab>
                </TabList>

                <TabPanel>
                    <div className='courses-section'>
                        {
                            category.map(course => <CourseCard
                                key={course._id}
                                course={course}
                            ></CourseCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='courses-section'>
                        {
                            category.map(course => <CourseCard
                                key={course._id}
                                course={course}
                            ></CourseCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>


        </section>
    );
};

export default Courses;