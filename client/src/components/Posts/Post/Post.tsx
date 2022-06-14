// @ts-nocheck
import React, { useState } from 'react'
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from '@material-ui/core'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import DeleteIcon from '@mui/icons-material/Delete'
import ThumbUpAltOutlined from '@mui/icons-material/ThumbUpAltOutlined'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import moment from 'moment'
import styled from './styles'
import { useDispatch } from 'react-redux'
import { deletePost, likePost } from '../../../redux/actions/posts'

const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'))
    const userId = user?.result?._id
    const hasLikedPost = post.likes.find((like) => like === userId)

    const [likes, setLikes] = useState(post?.likes)
    const handleLike = async () => {
        dispatch(likePost(post._id))

        if (hasLikedPost) {
            setLikes(post.likes.filter((id) => id !== userId))
        } else {
            setLikes([...post.likes, userId])
        }
    }

    const Likes = () => {
        if (likes.length > 0) {
            return likes.find((like) => like === userId) ? (
                <>
                    <ThumbUpAltIcon fontSize="small" />
                    &nbsp;
                    {likes.length > 2
                        ? `You and ${likes.length - 1} others`
                        : `${likes.length} like${likes.length > 1 ? 's' : ''}`}
                </>
            ) : (
                <>
                    <ThumbUpAltOutlined fontSize="small" />
                    &nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}
                </>
            )
        }

        return (
            <>
                <ThumbUpAltOutlined fontSize="small" />
                &nbsp;Like
            </>
        )
    }
    const classes = styled()
    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={post.selectedFile}
                title={post.title}
            />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.name}</Typography>
                <Typography variant="body2">
                    {moment(post.createdAt).fromNow()}
                </Typography>
            </div>
            <div className={classes.overlay2}>
                <Button
                    style={{ color: 'white' }}
                    size="small"
                    onClick={() => setCurrentId(post._id)}
                >
                    <MoreHorizIcon fontSize="medium" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">
                    {post.tags.map((tag) => `#${tag} `)}
                </Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>
                {post.title}
            </Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {post.message}
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button
                    size="small"
                    color="primary"
                    disabled={!user?.result}
                    onClick={handleLike}
                >
                    <Likes />
                </Button>
                {(user?.result?.googleId === post?.creator ||
                    user?.result?._id === post?.creator) && (
                    <Button
                        size="small"
                        color="secondary"
                        onClick={() => dispatch(deletePost(post._id))}
                    >
                        <DeleteIcon fontSize="small" /> &nbsp; Delete
                    </Button>
                )}
            </CardActions>
        </Card>
    )
}

export default Post
