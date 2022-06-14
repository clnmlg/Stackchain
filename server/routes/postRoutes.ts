import express, { Router } from 'express'
import {
    getPosts,
    createPost,
    updatePost,
    deletePost,
    likePost,
} from '../controllers/postController'
import authMiddleware from '../middleware/auth'
const posts = Router()

posts.get('/', getPosts)
posts.post('/', authMiddleware, createPost)
posts.patch('/:id', authMiddleware, updatePost)
posts.delete('/:id', authMiddleware, deletePost)
posts.patch('/:id/likePost', authMiddleware, likePost)
export default posts
