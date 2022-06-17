import React, { useState } from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { deletePost, likePost } from '../../../redux/actions/posts'
import { IoIosDocument, IoIosHeartEmpty } from 'react-icons/io'
import {
    Box,
    Icon,
    chakra,
    Badge,
    Img,
    Collapse,
    Button,
    useDisclosure,
    Divider,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Post = ({ post, setCurrentId }: any) => {
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile') as string)
    const userId = user?.result?._id
    const hasLikedPost = post.likes.find((like: any) => like === userId)
    const [likes, setLikes] = useState(post?.likes)
    const [show, setShow] = React.useState(false)
    const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: false })
    const handleToggle = () => setShow(!show)
    const postLength = post.message
    const lengthCheck =
        postLength.length > 40 ? (
            <Button onClick={onToggle} size={'sm'} mt="2" variant={'outline'}>
                {isOpen ? 'Hide' : 'Show'} more
            </Button>
        ) : (
            ''
        )
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
                    <IoIosHeartEmpty />
                    &nbsp;
                    {likes.length > 2
                        ? `You and ${likes.length - 1} others`
                        : `${likes.length} like${likes.length > 1 ? 's' : ''}`}
                </>
            ) : (
                <>
                    <IoIosHeartEmpty />
                    &nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}
                </>
            )
        }

        return (
            <>
                <IoIosHeartEmpty />
                &nbsp;Like
            </>
        )
    }

    return (
        <Box position="relative">
            <Box
                as="span"
                fontSize="sm"
                position="absolute"
                right="5px"
                margin="5px"
                zIndex="1"
            >
                {user?.result?._id === post?.creator && (
                    <Badge
                        colorScheme="red"
                        mt={2}
                        rounded="md"
                        p="2px 8px"
                        as="button"
                        onClick={() => dispatch<any>(deletePost(post._id))}
                    >
                        Delete
                    </Badge>
                )}
            </Box>
            <Box
                // maxW="sm"
                borderWidth="1px"
                borderColor={''}
                shadow="md"
                minHeight={'96'}
                rounded="3xl"
                overflow="hidden"
                position="relative"
            >
                <Img src={post.selectedFile} alt="Blog image" />
                <Box p="5">
                    <Box display={'flex'} alignItems="baseline">
                        <Box
                            fontWeight="semibold"
                            as="h2"
                            letterSpacing="wide"
                            textTransform="uppercase"
                            ml="2"
                        >
                            {post.title}
                        </Box>
                    </Box>
                    <chakra.p ml="2">
                        {moment(post.createdAt).fromNow()}
                    </chakra.p>
                    <Box>
                        <Box as="span" color="gray.600" fontSize="sm">
                            <Badge rounded="full" px="2" variant="teal">
                                {post.name}
                            </Badge>
                        </Box>
                    </Box>

                    <Collapse startingHeight={20} in={isOpen}>
                        <Box
                            mt="1"
                            fontWeight="semibold"
                            as="p"
                            ml="2"
                            lineHeight="tight"
                            color="gray.600"
                            fontSize="sm"
                        >
                            {post.message}
                        </Box>
                    </Collapse>
                    {lengthCheck}
                    <Divider mt={5} mb={5} />
                    <Box display={'flex'} alignItems="baseline">
                        <Button
                            px={2}
                            py={1}
                            ml="2"
                            disabled={!user?.result}
                            onClick={handleLike}
                            variant="outline"
                        >
                            <Likes />
                        </Button>
                        {user?.result?._id === post?.creator && (
                            <Button
                                ml={2}
                                px={2}
                                py={1}
                                variant="outline"
                                onClick={() => setCurrentId(post._id)}
                            >
                                <IoIosDocument />
                            </Button>
                        )}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Post
