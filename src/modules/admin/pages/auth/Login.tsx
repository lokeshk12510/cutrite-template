import { useState } from 'react'
// Mui
import { Button, Checkbox, FormControlLabel, FormLabel, Link, Stack, TextField, Typography } from '@mui/material'
// Config
import Images from 'src/config/images'
// Components
import AuthTemplate from './AuthTemplate'
// React-query
import { useMutation } from '@tanstack/react-query'
// Utils
import { fakePromise } from 'src/utils/helper'
// Redux
import { useDispatch } from 'react-redux'
import { IAuthState, storeToken } from 'src/app/slices/authSlice'
import { showSnackbar } from 'src/app/slices/snackbarSlice'

const getAuthQuery = async (formData: IAuthState): Promise<IAuthState> => {
    return await fakePromise(formData)
}

const Login = () => {
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        emailId: '',
        password: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((f) => ({ ...f, [name]: value }))
    }

    const { mutate, isPending } = useMutation({
        mutationFn: (formData: IAuthState) => {
            return getAuthQuery(formData)
        },
        onSuccess(data) {
            if (data?.token) {
                dispatch(storeToken(data))
                dispatch(showSnackbar({ title: 'Logged In successfully!', type: 'success' }))
            }
        },
        onError(error) {
            console.log(error)
        },
    })

    const handleLogin = () => {
        const data: IAuthState = {
            token: 'valid',
            userType: 'ADMIN',
            user: { name: formData.emailId },
        }
        mutate(data)
    }

    return (
        <AuthTemplate>
            <>
                <img src={Images.Logo} alt="logo" className="logo" />

                <Typography variant={'h5'} fontWeight={'bold'} component={'h1'} mb={3}>
                    Login {isPending && 'Loading...'}
                </Typography>

                <div className="inputField">
                    <FormLabel>Email ID</FormLabel>
                    <TextField
                        placeholder="Enter Email ID"
                        name="emailId"
                        fullWidth
                        onChange={handleChange}
                        value={formData.emailId}
                    />
                </div>
                <div className="inputField">
                    <FormLabel>Password</FormLabel>
                    <TextField
                        placeholder="Enter Password"
                        name="password"
                        fullWidth
                        type="password"
                        onChange={handleChange}
                        value={formData.password}
                    />
                </div>
                <Stack direction={'row'} alignItems="center" justifyContent="space-between" width={'100%'} my={1}>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me?" />
                    <Button variant="contained" onClick={handleLogin}>
                        Login
                    </Button>
                </Stack>

                <Link variant="body2" my={3}>
                    Forget Password?
                </Link>
            </>
        </AuthTemplate>
    )
}

export default Login
