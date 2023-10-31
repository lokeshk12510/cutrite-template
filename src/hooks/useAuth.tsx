// Redux
import { useSelector } from 'react-redux'
import { IAuthState, getAuth } from 'src/app/slices/authSlice'
// Utils
import { fakePromise } from 'src/utils/helper'

const useAuth = () => {
    const auth = useSelector(getAuth)
    return auth
}

export default useAuth

export const useAuthPromise = async (): Promise<IAuthState> => {
    const auth = useSelector(getAuth)
    return await fakePromise({ ...auth, userType: 'ADMIN' })
}
