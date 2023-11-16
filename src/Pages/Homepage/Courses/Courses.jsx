import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard/CourseCard';
import "./Courses.css"
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Courses = () => {

    const [category, setCategory] = useState([]);
    const [selectedTab, setSelectedTab] = useState('Design');

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
        <section className='mt-10'>

            <Tabs>
                <TabList className="flex flex-row justify-around items-center gap-x-4 ">
                    <Tab
                        className="  cursor-pointer transition duration-100 ease-in-out transform hover:scale-105"
                        onClick={() => handleTabSelect('Design')}>
                        <span className='tab-title'>Design</span>
                    </Tab>
                    <Tab
                        className=" cursor-pointer transition duration-100 ease-in-out transform hover:scale-105"
                        onClick={() => handleTabSelect('Development')}>
                        <span className='tab-title'>Development</span>
                    </Tab>
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