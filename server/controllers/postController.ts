import { Request, Response } from 'express'
import mongoose from 'mongoose'
import Posts from '../models/postModel'

export const getPosts = async (req: Request, res: Response) => {
    try {
        const posts = await Posts.find()
        return res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createPost = async (req, res) => {
    const post = req.body
    const newPost = new Posts({
        ...post,
        creator: req.userId,
        createdAt: new Date().toISOString(),
    })
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updatePost = async (req: Request, res: Response) => {
    const { id: _id } = req.params
    const post = req.body
    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('No post with that id')
    const updatedPost = await Posts.findByIdAndUpdate(
        _id,
        { ...post, _id },
        { new: true }
    )
    res.json(updatedPost)
}

export const deletePost = async (req: Request, res: Response) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send('No post with that id')
    await Posts.findByIdAndRemove(id)
    res.json({ message: 'Stack deleted successfuly' })
}

export const likePost = async (req: any, res: Response) => {
    const { id } = req.params
    if (!req.userId) return res.json({ message: 'Unauthenticated' })
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`No post with id: ${id}`)
    const post = await Posts.findById(id)
    const index = post.likes.findIndex((id) => id === String(req.userId))
    if (index === -1) {
        post.likes.push(req.userId)
    } else {
        post.likes = post.likes.filter((id) => id !== String(req.userId))
    }

    const updatedPost = await Posts.findByIdAndUpdate(id, post, { new: true })
    res.json(updatedPost)
}
