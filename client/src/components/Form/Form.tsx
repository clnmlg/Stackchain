import React, { useState, useEffect } from 'react'
//@ts-ignore
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../redux/actions/posts'

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
    const token = localStorage.getItem('profile') as string
    const user = JSON.parse(token)

    useEffect(() => {
        if (post) setPostData(post)
    }, [post])

    const clear = () => {
        setCurrentId(0)
        setPostData({
            title: '',
            message: '',
            tags: '',
            selectedFile: '',
        })
    }

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()

        if (currentId === null) {
            dispatch<any>(
                createPost({
                    ...postData,
                    name: user?.result?.name,
                })
            )
            console.log(postData)
            clear()
        } else {
            dispatch<any>(
                updatePost(currentId, {
                    ...postData,
                    name: user?.result?.name,
                })
            )
            clear()
        }
    }

    return <></>
}

export default Form

// CREATION D'UN POST

// SI L'USER EST PAS CONNECTE
// if (!user?.result?.name) {
//     return (
//         <></>
//         // <Paper className={classes.paper}>
//         //     <Typography variant="h6" align="center">
//         //         {' '}
//         //         Please sign in to create a stack
//         //     </Typography>
//         // </Paper>
//     )
// }

// FORMULAIRE ON SUBMIT => ACTIOn
//     <form
//         autoComplete="off"
//         noValidate
//         className={`${classes.root} ${classes.form}`}
//         onSubmit={handleSubmit}
//     >

// TITRE DU FORMULAIRE (CHANGE EN FONCTION )
//         <Typography variant="h6">
//             {currentId ? `Editing "${post.title}"` : 'Creating a Stack'}
//         </Typography>

// INPUT TITRE DU POST
// //         <TextField
// //             name="title"
// //             variant="outlined"
// //             label="Title"
// //             fullWidth
// //             value={postData.title}
// //             onChange={(e) =>
// //                 setPostData({ ...postData, title: e.target.value })
// //             }
// //         />

// MESSAGE DU POST
//         <TextField
//             name="message"
//             variant="outlined"
//             label="Message"
//             fullWidth
//             multiline
//             minRows={4}
//             value={postData.message}
//             onChange={(e) =>
//                 setPostData({ ...postData, message: e.target.value })
//             }
//         />

// TAGS DU POST
//         <TextField
//             name="tags"
//             variant="outlined"
//             label="Tags (coma separated)"
//             fullWidth
//             value={postData.tags}
//             onChange={(e: any) =>
//                 setPostData({
//                     ...postData,
//                     tags: e.target.value.split(',') as string,
//                 })
//             }
//         />

// ENVOI DE L'IMAGE
//         <div className={classes.fileInput}>
//             <FileBase
//                 type="file"
//                 multiple={false}
//                 onDone={({ base64 }: any) =>
//                     setPostData({ ...postData, selectedFile: base64 })
//                 }
//             />

// BUTTON SUBMIT/CLEAR

//         <Button
//             className={classes.buttonSubmit}
//             variant="contained"
//             color="primary"
//             size="large"
//             type="submit"
//             fullWidth
//         >
//             Submit
//         </Button>
//         <Button
//             variant="contained"
//             color="secondary"
//             size="small"
//             onClick={clear}
//             fullWidth
//         >
//             Clear
//         </Button>
