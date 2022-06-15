import {
    Box,
    CircularProgress,
    SimpleGrid,
    useMediaQuery,
} from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post/Post.jsx'

const Posts = ({ setCurrentId }: any) => {
    const posts = useSelector((state: any) => state.posts)
    const [isLargerThanMD] = useMediaQuery('(min-width: 48em)')
    return !posts.length ? (
        <CircularProgress />
    ) : (
        <SimpleGrid
            columns={[3, null, 3]}
            spacing={10}
            display="flex"
            flexWrap={'wrap'}
            alignItems="stretch"
            justifyContent={'center'}
            py="16"
            px={isLargerThanMD ? '16' : '6'}
            flexDirection={isLargerThanMD ? 'row' : 'column'}
        >
            {posts.map((post: { _id: React.Key | null | undefined }) => (
                <Box key={post._id}>
                    <Post post={post} setCurrentId={setCurrentId} />
                </Box>
            ))}
        </SimpleGrid>
    )
}

export default Posts
