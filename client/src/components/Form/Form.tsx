import React, { useState, useEffect } from 'react'
import { Button, Typography, Paper, TextField } from '@material-ui/core'
//@ts-ignore
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../redux/actions/posts'
import styled from './styles'

const Form = ({ currentId, setCurrentId }: any) => {
    const [postData, setPostData] = useState({
        title: '',
        message: '',
        tags: '',
        selectedFile: '',
    })
    const post = useSelector((state: any) =>
        currentId
            ? state.posts.find((p: { _id: any }) => p._id === currentId)
            : null
    )
    const dispatch = useDispatch()
    const classes = styled()
    const token = localStorage.getItem('profile') as string
    const user = JSON.parse(token)

    useEffect(() => {
        if (post) setPostData(post)
    }, [post])

    const clear = () => {
        setCurrentId(0)
        setPostData({ title: '', message: '', tags: '', selectedFile: '' })
    }

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()

        if (currentId === null) {
            dispatch<any>(createPost({ ...postData, name: user?.result?.name }))
            console.log(postData)
            clear()
        } else {
            dispatch<any>(
                updatePost(currentId, { ...postData, name: user?.result?.name })
            )
            clear()
        }
    }

    if (!user?.result?.name) {
        return (
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    {' '}
                    Please sign in to create a stack
                </Typography>
            </Paper>
        )
    }

    return (
        <Paper className={classes.paper}>
            <form
                autoComplete="off"
                noValidate
                className={`${classes.root} ${classes.form}`}
                onSubmit={handleSubmit}
            >
                <Typography variant="h6">
                    {currentId ? `Editing "${post.title}"` : 'Creating a Stack'}
                </Typography>
                <TextField
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    value={postData.title}
                    onChange={(e) =>
                        setPostData({ ...postData, title: e.target.value })
                    }
                />
                <TextField
                    name="message"
                    variant="outlined"
                    label="Message"
                    fullWidth
                    multiline
                    minRows={4}
                    value={postData.message}
                    onChange={(e) =>
                        setPostData({ ...postData, message: e.target.value })
                    }
                />
                <TextField
                    name="tags"
                    variant="outlined"
                    label="Tags (coma separated)"
                    fullWidth
                    value={postData.tags}
                    onChange={(e: any) =>
                        setPostData({
                            ...postData,
                            tags: e.target.value.split(',') as string,
                        })
                    }
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }: any) =>
                            setPostData({ ...postData, selectedFile: base64 })
                        }
                    />
                </div>
                <Button
                    className={classes.buttonSubmit}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth
                >
                    Submit
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={clear}
                    fullWidth
                >
                    Clear
                </Button>
            </form>
        </Paper>
    )
}

export default Form
