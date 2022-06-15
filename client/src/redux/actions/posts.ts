import {
    FETCH_ALL,
    CREATE,
    UPDATE,
    DELETE,
    LIKE,
} from '../../constants/actionTypes'
import * as api from '../../api/index'

export const getPosts =
    () => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
        try {
            const { data } = await api.fetchPosts()

            dispatch({
                type: FETCH_ALL,
                payload: data,
            })
        } catch (error) {
            console.log(error)
        }
    }

export const createPost =
    (post: {
        name: any
        title: string
        message: string
        tags: string
        selectedFile: string
    }) =>
    async (dispatch: (arg0: { type: string; payload: any }) => void) => {
        try {
            const { data } = await api.createPost(post)

            dispatch({
                type: CREATE,
                payload: data,
            })
        } catch (error) {
            console.log(error)
        }
    }

export const updatePost =
    (
        id: any,
        post: {
            name: any
            title: string
            message: string
            tags: string
            selectedFile: string
        }
    ) =>
    async (dispatch: (arg0: { type: string; payload: any }) => void) => {
        try {
            const { data } = await api.updatePost(id, post)

            dispatch({
                type: UPDATE,
                payload: data,
            })
        } catch (error) {
            console.log(error)
        }
    }

export const likePost =
    (id: any) =>
    async (dispatch: (arg0: { type: string; payload: any }) => void) => {
        const user = JSON.parse(localStorage.getItem('profile') as string)

        try {
            //@ts-ignore
            const { data } = await api.likePost(id, user?.token)

            dispatch({
                type: LIKE,
                payload: data,
            })
        } catch (error) {
            console.log(error)
        }
    }

export const deletePost =
    (id: any) =>
    async (dispatch: (arg0: { type: string; payload: any }) => void) => {
        try {
            await await api.deletePost(id)

            dispatch({
                type: DELETE,
                payload: id,
            })
        } catch (error) {
            console.log(error)
        }
    }
