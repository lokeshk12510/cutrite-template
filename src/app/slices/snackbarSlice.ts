import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
// Mui
import { AlertColor } from '@mui/material'

interface ISnackbarState {
    title: string
    visible?: boolean
    type: AlertColor
}

const initialState: ISnackbarState = {
    title: '',
    visible: false,
    type: 'success',
}

export const snackbarSlice = createSlice({
    name: 'snackbar',
    initialState,
    reducers: {
        showSnackbar: (state, { payload }: { payload: ISnackbarState }) => {
            state.title = payload.title
            state.type = payload.type
            state.visible = true
        },
        hideSnackbar: () => initialState,
    },
})

export const { showSnackbar, hideSnackbar } = snackbarSlice.actions

export default snackbarSlice.reducer

export const getSnackbarState = (state: RootState) => state.snackbar
