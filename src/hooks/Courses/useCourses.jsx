import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const useCourses = () => {
    const { data: courses = [], refetch } = useQuery({
        queryKey: ["courses"],
        queryFn: () =>
            axios
                .get("https://silver-sport-server.vercel.app/class?approve=true")
                .then((res) => {
                    return res.data;
                }),
    });
    return [courses, refetch];
};

export default useCourses;