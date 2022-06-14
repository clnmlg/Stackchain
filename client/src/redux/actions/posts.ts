import {
    FETCH_ALL,
    CREATE,
    UPDATE,
    DELETE,
    LIKE,
} from '../../constants/actionTypes'
import * as api from '../../api'

// use Redux to pass/dispatch actions (type+payload) which get us
// datas from backend api.

//action to get all posts from api
export const getPosts =
    () => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
        try {
            const { data } = await api.fetchPosts()
            dispatch({ type: FETCH_ALL, payload: data })
        } catch (error) {
            console.log(error)
        }
    }

export const createPost =
    (post: {
        name: any
        title: string
        message: string
        tags?: string | string[]
        selectedFile: string
    }) =>
    async (dispatch: (arg0: { type: string; payload: any }) => void) => {
        try {
            const { data } = await api.createPost(post)
            dispatch({ type: CREATE, payload: data })
        } catch (error) {
            console.log(error.message)
        }
    }

export const updatePost =
    (
        id: any,
        post: {
            name: any
            title: string
            message: string
            tags?: string | string[]
            selectedFile: string
        }
    ) =>
    async (dispatch: (arg0: { type: string; payload: any }) => void) => {
        try {
            const { data } = await api.updatePost(id, post)
            dispatch({ type: UPDATE, payload: data })
        } catch (error) {
            console.log(error)
        }
    }

export const deletePost =
    (id: any) =>
    async (dispatch: (arg0: { type: string; payload: any }) => void) => {
        try {
            await api.deletePost(id)
            dispatch({ type: DELETE, payload: id })
        } catch (error) {
            console.log(error)
        }
    }

export const likePost =
    (id: any) =>
    async (dispatch: (arg0: { type: string; payload: any }) => void) => {
        try {
            const { data } = await api.likePost(id)
            dispatch({ type: LIKE, payload: data })
        } catch (error) {
            console.log(error.message)
        }
    }
