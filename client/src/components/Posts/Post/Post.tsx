import React, { useState } from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { deletePost, likePost } from '../../../redux/actions/posts'
import { Flex, Box, Icon, chakra, Image } from '@chakra-ui/react'
import { GoPencil, GoThumbsup, GoTrashcan } from 'react-icons/go'
const Post = ({ post, setCurrentId }: any) => {
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile') as string)
    const userId = user?.result?._id
    const hasLikedPost = post.likes.find((like: any) => like === userId)
    const [likes, setLikes] = useState(post?.likes)
    const handleLike = async () => {
        dispatch<any>(likePost(post._id))

        if (hasLikedPost) {
            setLikes(post.likes.filter((id: any) => id !== userId))
        } else {
            setLikes([...post.likes, userId])
        }
    }
    const Likes = () => {
        if (likes.length > 0) {
            return likes.find((like: any) => like === userId) ? (
                <>
                    <GoThumbsup />
                    &nbsp;
                    {likes.length > 2
                        ? `You and ${likes.length - 1} others`
                        : `${likes.length} like${likes.length > 1 ? 's' : ''}`}
                </>
            ) : (
                <>
                    <GoThumbsup />
                    &nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}
                </>
            )
        }

        return (
            <>
                <GoThumbsup />
                &nbsp;Like
            </>
        )
    }

    return (
        <>
            <Flex w="full">
                <Box
                    justifyContent="space-between"
                    flex-direction={'column'}
                    rounded="3xl"
                    shadow="dark-lg"
                    border="1px"
                    borderColor={'gray.700'}
                    position={'relative'}
                    m={'5'}
                    w="sm"
                    mx="auto"
                    overflow="hidden"
                >
                    <Flex justifyContent="flex-end" alignItems="center">
                        <chakra.span
                            p={6}
                            rounded="3xl"
                            textTransform="uppercase"
                            fontSize="xs"
                            textColor={'#555D6D'}
                        >
                            {moment(post.createdAt).fromNow()}
                        </chakra.span>
                    </Flex>
                    <Flex alignItems="center" m={3}>
                        <Image
                            borderRadius={'2xl'}
                            w={'full'}
                            h={56}
                            fit="cover"
                            objectPosition="center"
                            src={post.selectedFile}
                            alt="avatar"
                        />
                    </Flex>

                    <Flex alignItems="center" px={6} py={3} bg="gray.900">
                        <Icon h={6} w={6} color="white" />

                        <chakra.h1
                            mx={3}
                            color="white"
                            fontWeight="bold"
                            fontSize="lg"
                        >
                            {post.title}
                        </chakra.h1>
                    </Flex>

                    <Box py={4} px={6}>
                        <chakra.h1
                            fontSize="xl"
                            fontWeight="bold"
                            color="gray.800"
                            _dark={{
                                color: 'white',
                            }}
                        >
                            {post.name}
                        </chakra.h1>

                        <chakra.p
                            py={2}
                            color="gray.700"
                            _dark={{
                                color: 'gray.400',
                            }}
                        >
                            {post.message}
                        </chakra.p>
                    </Box>
                    <Box p={6}>
                        <chakra.span
                            fontSize="xs"
                            textTransform="uppercase"
                            color="brand.600"
                            _dark={{
                                color: 'brand.400',
                            }}
                        >
                            {post.tags.map((tag: any) => `#${tag} `)}
                        </chakra.span>
                    </Box>
                    <Flex
                        alignItems="center"
                        justifyContent="space-between"
                        px={4}
                        py={2}
                        bg="gray.900"
                        roundedBottom="lg"
                    >
                        <chakra.button
                            px={2}
                            py={1}
                            bg="'transparent"
                            disabled={!user?.result}
                            onClick={handleLike}
                        >
                            <Likes />
                        </chakra.button>
                        {user?.result?._id === post?.creator && (
                            <>
                                <chakra.button
                                    px={2}
                                    py={1}
                                    bg="'transparent"
                                    onClick={() =>
                                        dispatch<any>(deletePost(post._id))
                                    }
                                >
                                    <GoTrashcan />
                                </chakra.button>
                                <chakra.button
                                    px={2}
                                    py={1}
                                    bg="'transparent"
                                    onClick={() => setCurrentId(post._id)}
                                >
                                    <GoPencil />
                                </chakra.button>
                            </>
                        )}
                    </Flex>
                </Box>
            </Flex>
        </>
    )
}

export default Post
