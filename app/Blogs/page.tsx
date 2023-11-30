"use client";

import { useQuery } from '@tanstack/react-query'
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import ViewCard from "../../components/ViewCard/index";
import SkeletonCard from "../../components/SkeletonCard/index";

import { getAllPost } from '../api/getBlogs';

const AllBlogs = () => {
    const { data, status, isError } = useQuery({
        queryKey: ['allBlogs'],
        queryFn: getAllPost
    })
    // const myArray: number[] = Array.from({ length: 7 }, (_, index) => index);

    if (status === 'pending') {
        return (
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <SkeletonCard />
                </Grid>
                <Grid item xs={12} md={6}>
                    <SkeletonCard />
                </Grid>
            </Grid>
        )
    }

    const blogs = data?.data?.blogs

    if (status === 'success' && blogs?.length === 0) {
        return (<Typography component='h4' variant='h4'>
            No data found!
        </Typography>)
    }


    return (
        <Box>
            <Grid container spacing={3}>
                {
                    blogs?.map((item: any) => (
                        <Grid item xs={12} md={6} key={item.id}>
                            <ViewCard
                                title={item.title}
                                slug={item.slug}
                                image={item.banner_img}
                                date={item.created_at}
                                description={item.description}
                                tags={item.tags}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
};

export default AllBlogs;
