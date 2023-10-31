import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

type TUserType = 'ADMIN' | 'USER'

export interface IAuthState {
    token: string | null
    user: IUser | null
    userType: TUserType
}

interface IUser {
    name: string
}

const initialState: IAuthState = {
    token: null,
    user: null,
    userType: 'USER',
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        storeToken: (state, { payload }: { payload: IAuthState }) => {
            state.token = payload.token
            state.user = payload.user
            state.userType = payload.userType
        },
        authLogout: () => initialState,
    },
})

export const { storeToken, authLogout } = authSlice.actions

export default authSlice.reducer

export const getAuth = (state: RootState) => state.auth
