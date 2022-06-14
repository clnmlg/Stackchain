import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'
import Post from './Post/Post.jsx'
import styled from './styles'

const Posts = ({ setCurrentId }: any) => {
    const posts = useSelector((state: any) => state.posts)
    const classes = styled()
    return !posts.length ? (
        <CircularProgress />
    ) : (
        <Grid
            //@ts-ignore
            className={classes.container}
            container
            alignItems="stretch"
            spacing={3}
        >
            {posts.map((post: { _id: React.Key | null | undefined }) => (
                <Grid key={post._id} item xs={12} sm={6}>
                    <Post post={post} setCurrentId={setCurrentId} />
                </Grid>
            ))}
        </Grid>
    )
}

export default Posts
