import express from 'express'

import {
    getPosts,
    createPost,
    updatePost,
    likePost,
    deletePost,
} from '../controllers/postController'

const router = express.Router()
import auth from '../middleware/auth'

router.get('/', getPosts)

router.post('/', auth, createPost)
router.patch('/:id', auth, updatePost)
router.delete('/:id', auth, deletePost)
router.patch('/:id/likePost', auth, likePost)

export default router
