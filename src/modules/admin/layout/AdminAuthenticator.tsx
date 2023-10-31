import { useEffect } from 'react'
// Router
import { Navigate } from 'react-router-dom'
// Urls
import adminUrls from '../router/urls'
// React-query
import { useQuery } from '@tanstack/react-query'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { showSnackbar } from 'src/app/slices/snackbarSlice'
import { getAuth, storeToken } from 'src/app/slices/authSlice'
// Hooks
import { useAuthPromise } from 'src/hooks/useAuth'

interface IAdminAuthProps {
    children: React.ReactElement
}

const AdminAuthenticator = (props: IAdminAuthProps) => {
    const { children } = props

    const dispatch = useDispatch()

    const authState = useAuthPromise()

    const auth = useSelector(getAuth)

    const { isPending, data, isError, error, isSuccess } = useQuery({
        queryKey: ['auth_admin'],
        queryFn: async () => authState,
        staleTime: 0,
        enabled: Boolean(auth?.token),
        refetchOnMount: true,
    })

    useEffect(() => {
        if (auth?.token && isSuccess) {
            dispatch(storeToken({ user: data.user, token: data.token, userType: data.userType }))
            dispatch(showSnackbar({ title: 'Logged In as Admin!', type: 'success' }))
        }
    }, [auth?.token, data, dispatch, isSuccess])

    if (!auth?.token) {
        return <Navigate to={adminUrls.login} replace />
    }

    if (isPending) {
        return <div className="page-holder">loading...</div>
    }

    if (isError || !data.token || !auth?.token) {
        console.log(error)
        return <Navigate to={adminUrls.login} replace />
    }

    console.log('admin page render')

    return <>{children}</>
}

export default AdminAuthenticator
