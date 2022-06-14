import { AUTH } from '../../constants/actionTypes'
import * as api from '../../api'

export const signin =
    (
        formData: {
            firstName: string
            lastName: string
            email: string
            password: string
            confirmPassword: string
        },
        navigate: any
    ) =>
    async (dispatch: (arg0: { type: string; data: [] }) => void) => {
        try {
            const { data } = await api.signIn(formData)
            dispatch({ type: AUTH, data })
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

export const signup =
    (
        formData: {
            firstName: string
            lastName: string
            email: string
            password: string
            confirmPassword: string
        },
        navigate: any
    ) =>
    async (dispatch: (arg0: { type: string; data: [] }) => void) => {
        try {
            const { data } = await api.signUp(formData)
            dispatch({ type: AUTH, data })
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }
