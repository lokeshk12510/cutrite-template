import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface TAuthSlice {
    token: string | null
    user: IUser | null
    isLoading: boolean
}

interface IUser {
    id: number
    isAdmin: boolean
    name: string
}

const initialState: TAuthSlice = {
    token: null,
    user: null,
    isLoading: true,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        storeToken: (state, action) => {
            state.token = action.payload.token
            state.user = action.payload.user
        },
        setAuthLoading: (state, action) => {
            state.isLoading = action.payload
        },
    },
})

export const { storeToken, setAuthLoading } = authSlice.actions

export default authSlice.reducer

export const getToken = (state: RootState) => state.auth.token
export const getUser = (state: RootState) => state.auth.user
export const getAuthLoader = (state: RootState) => state.auth.isLoading
