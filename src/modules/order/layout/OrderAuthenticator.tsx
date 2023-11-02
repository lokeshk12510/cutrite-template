import { useEffect } from 'react'
// Router
import { useLocation, useNavigate } from 'react-router-dom'
// React-query
import { useQuery } from '@tanstack/react-query'
// Helper
import { fakePromise } from 'src/utils/helper'
// Redux
import { useDispatch } from 'react-redux'
// Redux
import { IAuthState, storeToken } from 'src/app/slices/authSlice'
import { showSnackbar } from 'src/app/slices/snackbarSlice'
// Components
import Loader from 'src/components/Loader'

interface IProctedLayoutProps {
    children: React.ReactElement
}

const OrderAuthenticator = (props: IProctedLayoutProps) => {
    const { children } = props

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const location = useLocation()

    const { isPending, data, isError, error, isSuccess } = useQuery({
        queryKey: ['auth_user'],
        queryFn: getAuth,
        staleTime: Infinity,
    })

    useEffect(() => {
        if (isSuccess) {
            dispatch(storeToken({ user: data.user, token: data.token, userType: data.userType }))
            dispatch(showSnackbar({ title: 'Logged In as User!', type: 'success' }))
        }
    }, [dispatch, isSuccess, data])

    if (isPending) {
        return <Loader />
    }

    if (isError) {
        console.log(error)
        navigate('/', { state: { from: location }, replace: true })
    }

    console.log('order page render')

    return <>{children}</>
}

export default OrderAuthenticator

const getAuth = async (): Promise<IAuthState> => {
    return await fakePromise({ token: 'sdfsdf', userType: 'USER', user: { name: 'lokesh' } })
}
