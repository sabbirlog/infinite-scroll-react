"use client";

import { useInfiniteQuery } from '@tanstack/react-query'
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import ViewCard from "../../components/ViewCard/index";
import SkeletonCard from "../../components/SkeletonCard/index";

import { getAllPost } from '../api/getBlogs';
import { Fragment } from 'react';

const AllBlogs = () => {
    const { data, status, isError, fetchNextPage, isFetchingNextPage, hasNextPage } = useInfiniteQuery({
        queryKey: ['allBlogs'],
        queryFn: getAllPost,
        initialPageParam: 1,
        getNextPageParam: (lastPage: any, _allPages: any, lastPageParam: number) => {
            if (lastPage.data.blogs.length === 0) {
                return undefined
            }
            return lastPageParam + 1
        }
    })

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

    return (
        <Box>
            <Grid container spacing={3}>
                {
                    data?.pages?.map((group: any, i: number) => {
                        const blogsArr = group?.data?.blogs;
                        return (
                            <Fragment key={i}>
                                {
                                    blogsArr?.map((item: any) => (
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
                            </Fragment>
                        )
                    })
                }
            </Grid>
            <Button variant="contained" color="info" sx={{
                marginTop: '20px'
            }}
                disabled={!hasNextPage || isFetchingNextPage}
                onClick={() => fetchNextPage()}>
                {isFetchingNextPage
                    ? 'Loading more...'
                    : hasNextPage
                        ? 'Load More'
                        : 'Nothing more to load'}
            </Button>
        </Box>
    );
};

export default AllBlogs;
