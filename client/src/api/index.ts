import axios, { AxiosRequestConfig } from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })
const token = localStorage.getItem('profile')
API.interceptors.request.use((req: AxiosRequestConfig) => {
    if (token) {
        req.headers!.Authorization = `Bearer ${JSON.parse(token).token}`
    }
    return req
})

export const fetchPosts = () => API.get('/posts')
export const createPost = (newPost: any) => API.post('/posts', newPost)
export const likePost = (id: any) => API.patch(`/posts/${id}/likePost`)
export const updatePost = (id: any, updatedPost: any) =>
    API.patch(`/posts/${id}`, updatedPost)
export const deletePost = (id: any) => API.delete(`/posts/${id}`)

export const signIn = (formData: {
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
}) => API.post('/user/signin', formData)
export const signUp = (formData: {
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
}) => API.post('/user/signup', formData)
