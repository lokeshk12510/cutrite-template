import { useCallback, useEffect } from 'react'
// Mui
import MuiAlert from '@mui/material/Alert'
import { Snackbar as MuiSnackbar } from '@mui/material'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { getSnackbarState, hideSnackbar } from 'src/app/slices/snackbarSlice'
// Router
import { useLocation } from 'react-router-dom'

const SnackbarContext = () => {
    const dispatch = useDispatch()
    const { title, visible, type } = useSelector(getSnackbarState)

    const onClose = useCallback(() => {
        dispatch(hideSnackbar())
    }, [dispatch])

    const location = useLocation()
    useEffect(() => {
        return () => {
            onClose()
        }
    }, [dispatch, location.pathname, onClose])

    return (
        <MuiSnackbar
            open={visible}
            autoHideDuration={4000}
            onClose={onClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            sx={{ top: { xs: 75 } }}
        >
            <MuiAlert onClose={onClose} severity={type} variant="filled">
                {title}
            </MuiAlert>
        </MuiSnackbar>
    )
}

export default SnackbarContext
